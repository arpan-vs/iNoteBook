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
            const { title, description, tag } = req.body;
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

//ROUTE 3: Update an existing Note using: PUT "/api/auth/updatenote/:id". login required
router.put("/updatenote/:id", fetchuser, async (req, res) => {
    try {
        const { title, description, tag } = req.body;
        // Create a newNote object
        const newNote = {};
        if (title) {
            newNote.title = title;
        }
        if (description) {
            newNote.description = description;
        }
        if (tag) {
            newNote.tag = tag;
        }

        // Find the note to be updated and update it
        let note = await Note.findById(req.params.id);
        if (!note) {
            return res.status(404).send("Not Found");
        }

        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed");
        }

        note = await Note.findByIdAndUpdate(
            req.params.id,
            { $set: newNote },
            { new: true }
        );
        res.json({ note });
    } catch (error) {
        // catch a error
        console.error(error.message);
        res.status(500).send("Internal Server a Error!");
    }
});
//ROUTE 4: Delete an existing Note using: DELETE "/api/auth/deletenote/:id". login required
router.delete("/deletenote/:id", fetchuser, async (req, res) => {
    try {
        const { title, description, tag } = req.body;

        // Find the note to be deleted and delete it
        let note = await Note.findById(req.params.id);
        if (!note) {
            return res.status(404).send("Not Found");
        }

        // Allow deletion only if user owns this note
        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed");
        }

        note = await Note.findByIdAndDelete(req.params.id);
        res.json({ Success: "Note has been deleted", note: note });
    } catch (error) {
        // catch a error
        console.error(error.message);
        res.status(500).send("Internal Server a Error!");
    }
});

module.exports = router;
