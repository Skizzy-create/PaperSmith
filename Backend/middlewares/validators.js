// This file contains the validation functions for the user input data. mainly api routes. 
// The zod library is used to create the schema for the user input data. 
// The schema is then exported to the routes where it is used to validate the user input data.

const { userSignup, userLogin, createTodo, updateTodo } = require("../utility/schemas.js");


function validateUserSignup(req, res, next) {
    const username = req.body.userName;
    const password = req.body.password;
    const email = req.body.email;
    try {
        const isValid = userSignup.safeParse({
            username: username,
            password: password,
            email: email
        });
        console.log("isValid = " + isValid.success);
        console.log("isValid error = " + isValid.error);

        if (!isValid.success) {
            // next(new Error(isValid.error.errors)); // Pass the error to the error handler middleware
            return res.status(400).json({
                message: "Invalid data",
                error: isValid.error
            });
        } else {
            next();
        }
    } catch (err) {
        console.log("Error :", err);
        return res.status(500).json({
            message: "Server Error"
        });
    }
}


function validateUserLogin(req, res, next) {
    const email = req.body.email;
    const password = req.body.password;
    try {
        const isValid = userLogin.safeParse({
            email: email,
            password: password
        });
        console.log("isValid = " + isValid.success);
        console.log("isValid error = " + isValid.error);

        if (!isValid.success) {
            return res.status(400).json({
                message: "Invalid data",
                error: isValid.error
            });
        } else {
            next();
        }
    } catch (err) {
        console.log("Error :", err);
        return res.status(500).json({
            message: "Server Error"
        });
    }

}


module.exports = {
    validateUserSignup,
    validateUserLogin,
}