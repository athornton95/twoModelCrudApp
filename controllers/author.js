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

// EDIT

router.put('/:id', (req, res) => {
    Author.findByIdAndUpdate(req.params.id, req.body, (err, updateAuthor) => {
        if(err){
            console.log(err);
            res.send(err);
        } else {
            res.redirect('/authors')
        }
    })
})

router.get('/:id/edit', (req, res) => {
    Author.findById(req.params.id, (err, foundAuthor) => {
        if(err){
            console.log(err);
            res.send(err);
        } else {
            res.render('authors/edit.ejs', {authors: foundAuthor});
        }
    })
})


// SHOW ROUTE

router.get('/:id', (req, res) => {
    Author.findById(req.params.id, (err, foundAuthor) => {
        if(err){
            console.log(err);
            res.send(err);
        } else {
            res.render('authors/show.ejs', {authors: foundAuthor});
        }
    })
})










module.exports = router;