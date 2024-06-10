const bycrpt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const JWT_SECRET = 'tuisehfuiafue ewr hweioufh wejlhfb whe';

async function generateToken(user) {
    const payload = {
        id: user._id,
        email: user.email,
    }
    const token = await jwt.sign(payload, JWT_SECRET);
    return token;
}

async function hashPassword(password) {
    const salt = await bycrpt.genSalt(10);
    const hashedPassword = await bycrpt.hash(password, salt);
    return hashedPassword;
};

async function varifyPssword(password, hashedPassword) {
    const isValid = await bycrpt.compare(password, hashedPassword);
    return isValid;
};

module.exports = {
    hashPassword,
    varifyPssword
}