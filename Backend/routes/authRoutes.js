const express = require("express");
const router = express.Router();
const { hashedPassword, generateToken, checkPassword } = require("../auth/authOps");
const { validateUserSignup, validateUserLogin } = require("../middlewares/validators");
const { User, UserDataSchema } = require("../database/databseOPS");


router.post('/signup', validateUserSignup, async (req, res) => {
    const userName = req.body.userName;
    const password = req.body.password;
    const email = req.body.email;

    try {
        // Check for existing user
        const existingUser = await User.findOne({
            $or: [ // Use $or to check for either email or username
                { email: email },
                { username: userName }
            ]
        });
        // console.log(existingUser)
        if (existingUser) {
            return res.status(400).json({
                message: "User already exists"
            }); // Use 400 for Bad Request
        }

        // Hash password with bcrypt
        const hashPassword = await hashedPassword(password);

        // Create new user with hashed password
        const newUser = await User.create({
            username: userName,
            password: hashPassword, // Use hashedPassword
            email: email,
            userData: {
                type: UserDataSchema,
                default: {}  // this is for telling mongoose to use the default values from the schema
            }
        });

        let token;
        try {
            // Generate JWT token
            token = generateToken(newUser);
        } catch (err) {
            console.error("Error generating token: ", err);

            // Delete the user
            await User.deleteOne({ username: userName, email: email });
            console.log("User deleted -- Error generating token --post signup");

            return res.status(500).json({
                message: "Error creating user"
            });
        }

        res.status(201).json({
            message: "User created successfully",
            _id: newUser._id,
            token: token
        });
    } catch (err) {
        console.error(err); // Log the error for debugging
        res.status(500).json({ message: "Error creating user" });
    }
});



router.post('/login', validateUserLogin, async function (req, res) {
    const email = req.body.email;
    const password = req.body.password;

    // Check for existing user
    try {
        const existingUser = await User.findOne({
            email,
        });
        if (existingUser) {
            console.log("User exists");
        } else {
            console.log("User doesnt exist");
            return res.status(403).json({
                msg: "User doesnt exist"
            });
        }

        const isValid = await checkPassword(password, existingUser.password);
        console.log("isValid", isValid);
        if (!isValid) {
            return res.status(403).json({
                msg: "Invalid Credentials"
            });
        }

        // Generate JWT token
        const token = generateToken(existingUser);
        res.status(200).json({
            msg: "Login successful",
            token: token
        });

    } catch (err) {
        res.status(411).json({
            msg: "error",
            error: err
        });
        console.log("Errors:\n" + err);
    }
});

module.exports = router;
