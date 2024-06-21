const express = require('express');
const router = express.Router();
const { authenticateToken } = require('../auth/auth');
const { Folder } = require('../database/databseOPS');

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

// Add a new folder
router.put('/addF', authenticateToken, checkRequiredFields(['folderName']), async (req, res) => {
    const userId = res.locals.user.id;
    const { folderName } = req.body;

    try {
        const userFolders = await Folder.findOne({ userId });
        if (userFolders) {
            userFolders.folders.push(folderName);
            await userFolders.save();
        } else {
            await Folder.create({ userId, folders: [folderName] });
        }
        res.status(200).json({ message: 'Folder added successfully' });
    } catch (err) {
        console.error('Error adding folder:', err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

// Get all folders
router.get('/getF', authenticateToken, async (req, res) => {
    const userId = res.locals.user.id;

    try {
        const userFolders = await Folder.findOne({ userId });
        if (!userFolders) {
            return res.status(404).json({ message: 'No folders found' });
        }
        res.status(200).json(userFolders.folders);
    } catch (err) {
        console.error('Error retrieving folders:', err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

module.exports = router;
