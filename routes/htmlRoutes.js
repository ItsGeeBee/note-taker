const path = require('path');
const htmlRoutes = require('express').Router();


    // GET /notes - Should return the notes.html file.
    htmlRoutes.get("/notes", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    });

    // GET * - Should return the index.html file
    htmlRoutes.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });


module.exports = htmlRoutes;
