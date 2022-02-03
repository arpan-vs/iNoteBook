const express = require("express");
const User = require("../models/User");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const JWT_SECRET = 'Arpanisagoodboy'
// creat a User using: POST "/api/auth". no login required
router.post(
    "/createuser",
    [
        body("name", "Enter a valid Name").isLength({ min: 3 }),
        body("email", "Enter a valid Email").isEmail(),
        body("password", "Password must be atleast 8 character").isLength({
            min: 8,
        }),
    ],
    async (req, res) => {
        // If there are errors, return the Bad request and the errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        // Check whether the user with this email exists already
        try {
            let user = await User.findOne({ email: req.body.email });
            if (user) {
                return res
                    .status(400)
                    .json({
                        error: "Sorry a user with this email already exists",
                    });
            }

            const salt = await bcrypt.genSalt(10);
            const secPass = await bcrypt.hash(req.body.password,salt);

            // create a user
            user = await User.create({
                name: req.body.name,
                email: req.body.email,
                password: secPass,
            });
            const data = {
                user:{
                    id: user.id
                }
            }
            const authToken = jwt.sign(data,JWT_SECRET);

            // res.json(user);
            res.json({authToken})

        }// catch a error 
        catch (error) {
            console.error(error.message);
            res.status(500).send("Some Error occured!");
        }
    }
);

module.exports = router;
