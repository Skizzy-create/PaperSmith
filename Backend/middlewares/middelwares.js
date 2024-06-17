// Middleware to check for required data
function checkRequiredFields(fields) {
    return (req, res, next) => {
        for (let field of fields) {
            if (!req.body[field]) {
                return res.status(400).json({ message: `Missing field: ${field}` });
            }
        }
        next();
    };
}

module.exports = checkRequiredFields;