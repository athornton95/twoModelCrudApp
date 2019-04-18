const express = require('express');
const router = express.Router();
const Author = require('../models/authors/Authors');


//SHOW INDEX
router.get('/', (req, res) => {
    Author.find({}, (err, allAuthors) => {
        if(err){
            console.log(err);
            res.send(err);
        } else {
            console.log(allAuthors);
            res.render('authors/index.ejs', {authors: allAuthors});
        } 
    })
});


//MAKE NEW AUTHOR

router.post('/', (req, res) => {
    Author.create(req.body, (err, madeAuthor) =>{
        if(err){
            console.log(err);
            res.send(err);
        } else {
            console.log(madeAuthor);
            res.redirect('/authors');
        }
    })
})

router.get('/new', (req, res) => {
    res.render('authors/new.ejs');
})

// DELETE

router.delete('/:id', (req, res) => {
    Author.findByIdAndDelete(req.params.id, (err, deletedAuthor) => {
        if(err){
            console.log(err);
            res.send(err);
        } else {
            console.log(deletedAuthor);
            res.redirect('/authors');
        }
    })
})










module.exports = router;