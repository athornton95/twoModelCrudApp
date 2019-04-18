const express = require('express');
const router = express.Router();
const Author = require('../models/authors/Authors');

router.get('/', (req, res) => {
    Author.find({}, (err, allAuthors) => {
        if(err){
            console.log(err);
            res.send(err);
        } else {
            console.log(allAuthors);
            res.render('authors/index.ejs');
        } 
    })
});










module.exports = router;