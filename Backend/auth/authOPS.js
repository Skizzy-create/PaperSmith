const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
// const JWT_SECRET = process.env.JWT_SECRET;
const JWT_SECRET = "TempSecretBecasuse the .env is not working "; // for testing purposes

require('dotenv').config();

// JWT token generation and verification functions
/**
 * Generates a token for the given user.
 *
 * @param {Object} user - The user object.
 * @param {string} user._id - The ID of the user.
 * @param {string} user.email - The email of the user.
 * @returns {string} The generated token.
 */
function generateToken(user) {
    const payload = {
        id: user._id,
        email: user.email,
    }
    const token = jwt.sign(payload, JWT_SECRET);
    return token;
};

/**
 * Verifies the authenticity of a JSON Web Token (JWT).
 * @param {string} token - The JWT to be verified.
 * @returns {object|boolean} - Returns the decoded token if it is valid, otherwise returns false.
 */
function verifyToken(token) {
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        return decoded;
    } catch (err) {
        console.error("Error verifying JWT:", "\n", err);
        return false;
    }
}

// pasword hashing and checking functions usiong bycrypt
/**
 * Generates a hashed password using bcrypt.
 *
 * @param {string} password - The password to be hashed.
 * @returns {Promise<string>} - A promise that resolves to the hashed password.
 */
async function hashedPassword(password) {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
};

/**
 * Compares a plain text password with a hashed password using bcrypt.
 *
 * @param {string} password - The plain text password to compare.
 * @param {string} hashedPassword - The hashed password to compare against.
 * @returns {Promise<boolean>} - A promise that resolves to a boolean indicating whether the password is valid.
 */
async function checkPassword(password, hashedPassword) {
    const isValid = await bcrypt.compare(password, hashedPassword);
    return isValid;
};

module.exports = {
    hashedPassword,
    checkPassword,
    generateToken,
    verifyToken
}