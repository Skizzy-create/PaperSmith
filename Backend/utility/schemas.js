const zod = require('zod');
const { default: errorMap } = require('zod/locales/en.js');

const userSignup = zod.object({
    username: zod.string(),
    password: zod.string().min(8),
    email: zod.string().email(),
});

const userLogin = zod.object({
    email: zod.string().email(),
    password: zod.string().min(8),
});
module.exports = {
    userSignup,
    userLogin,
}