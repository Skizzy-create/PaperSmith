const express = require("express");
const router = express.Router();
const { hashedPassword, generateToken, checkPassword } = require("../auth/authOPS");
const { validateUserSignup, validateUserLogin } = require("../middlewares/validators");
const { User, UserDataSchema } = require("../database/databseOPS");

router.post('/signup', validateUserSignup, async (req, res) => {
    const { userName, password, email } = req.body;

    try {
        const existingUser = await User.findOne({
            $or: [
                { email: email },
                { username: userName }
            ]
        });

        if (existingUser) {
            return res.status(400).json({
                msg: "User already exists"
            });
        }

        const hashPassword = await hashedPassword(password);

        const newUser = await User.create({
            username: userName,
            password: hashPassword,
            email: email,
            userData: {
                type: UserDataSchema,
                default: {}
            }
        });

        const token = generateToken(newUser, res);
        if (!token) {
            await User.deleteOne({ username: userName, email: email });
            console.log("User deleted -- Error generating token -- post signup");

            return res.status(500).json({
                msg: "Error creating user"
            });
        }

        res.status(200).json({
            msg: "User created successfully",
            _id: newUser._id,
            validation: true
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            msg: "Error creating user",
            validation: false
        });
    }
});

router.post('/login', validateUserLogin, async (req, res) => {
    console.log("---Route Called = Login route---");
    const { email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if (!existingUser) {
            return res.status(403).json({
                msg: "User doesn't exist",
                validation: false
            });
        }

        const isValid = await checkPassword(password, existingUser.password);
        if (!isValid) {
            return res.status(403).json({
                msg: "Invalid Credentials",
                validation: false
            });
        }

        const tokenRes = generateToken(existingUser, res);
        if (!tokenRes) {
            return res.status(500).json({
                msg: "Error generating token"
            });
        }

        res.status(200).json({
            msg: "Login successful",
            validation: true
        });

    } catch (err) {
        console.error("Errors:\n", err);
        res.status(500).json({
            msg: "Error during login",
            validation: false
        });
    }
});

router.get('/logout', (req, res) => {
    res.clearCookie("token");
    res.status(200).json({
        msg: "Logged out successfully"
    });
});

module.exports = router;
