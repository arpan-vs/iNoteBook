const express = require("express");
const router = express.Router();
const fetchuser = require("../middleware/fetchUser");
const Note = require("../models/Notes");
const { body, validationResult } = require("express-validator");

//ROUTE 1: Get All the Note using: GET "/api/auth/fetchallNote". login required
router.get("/fetchallnotes", fetchuser, async (req, res) => {
    try {
        const Notes = await Note.find({ user: req.user.id });
        res.json(Notes);
    } catch (error) {
        // catch a error
        console.error(error.message);
        res.status(500).send("Internal Server a Error!");
    }
});

//ROUTE 2: Add a new Note using: POST "/api/auth/addnote". login required
router.post(
    "/addnote",
    fetchuser,
    [
        body("title", "Enter a valid Title").isLength({ min: 3 }),
        body(
            "description",
            "Description must ne atleast 5 characters"
        ).isLength({ min: 5 }),
    ],
    async (req, res) => {
        // If there are errors, return the Bad request and the errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        try {
            const { title, description, tag} = req.body;
            const note = new Note({
                title,
                description,
                tag,
                user: req.user.id,
            });
            const saveNote = await note.save();
            res.json(saveNote);
        } catch (error) {
            // catch a error
            console.error(error.message);
            res.status(500).send("Internal Server Error!");
        }
    }
);
module.exports = router;
