const express = require("express");
const paperGenerate = require("../test/paperGenerate");
const { Paper } = require("../database/databseOPS");
const { authenticateToken } = require("../auth/auth");
const checkRequiredFields = require("../middlewares/middelwares");
const router = express.Router();


router.use(authenticateToken);

// route to generate a new paper.
router.get("/new", async (req, res) => {
    // geting the data for the creation of the paper. for generating the paper.
    const sections = req.body.sections;
    const questions = req.body.questions;
    const type = req.body.type;
    const optional = req.body.optional;
    const title = req.body.title;
    const createdId = req.body.createdId;
    // creating the paper object.
    const paper = {
        title: title,
        createdBy: createdId,
        specs: {
            sections: sections,
            questions: questions,
            type: type,
            optional: optional,
        },
    };
    // saving the paper object to the database.
    const paperObj = new Paper(paper);
    console.log(paperObj);
    let savePaper;
    try {
        savePaper = await paperObj.save();
        console.log("Paper Saved");
    } catch (error) {
        return res.status(500).json({ msg: "Internal Server Error" });
    }

    data = paperGenerate();
    res.status(200).json({
        data,
        id: savePaper._id
    });
});


// Add to favourites
router.get('/favourite/:id', authenticateToken, async (req, res) => {
    const paperId = req.params.id;
    const userId = res.locals.user.id;

    try {
        const paper = await Paper.findOneAndUpdate(
            { _id: paperId, createdBy: userId },
            { favourite: true },
            { new: true }
        );
        if (!paper) {
            return res.status(404).json({ message: 'Paper not found' });
        }
        res.status(200).json({ message: 'Paper added to favourites' });
    } catch (err) {
        console.error('Error adding to favourites:', err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

// Move to trash
router.get('/sendTrash/:id', authenticateToken, async (req, res) => {
    const paperId = req.params.id;
    const userId = res.locals.user.id;

    try {
        const paper = await Paper.findOneAndUpdate(
            { _id: paperId, createdBy: userId },
            { location: 'trash' },
            { new: true }
        );
        if (!paper) {
            return res.status(404).json({ message: 'Paper not found' });
        }
        res.status(200).json({ message: 'Paper moved to trash' });
    } catch (err) {
        console.error('Error moving paper to trash:', err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

// Get all trash papers for a user
router.get('/trash/:userId', authenticateToken, async (req, res) => {
    const userId = req.params.userId;

    try {
        const papers = await Paper.find({ createdBy: userId, location: 'trash' });
        if (!papers || papers.length === 0) {
            return res.status(404).json({ message: 'No papers found in trash' });
        }
        res.status(200).json(papers);
    } catch (err) {
        console.error('Error retrieving trash papers:', err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

module.exports = router;
