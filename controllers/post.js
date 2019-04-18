const express = require('express');
const router = express.Router();
const Post = require('../models/posts/Posts');


//SHOW INDEX
router.get('/', (req, res) => {
    Post.find({}, (err, allPosts) => {
        if(err){
            console.log(err);
            res.send(err);
        } else {
            console.log(allPosts);
            res.render('posts/index.ejs', {posts: allPosts});
        } 
    })
});


//MAKE NEW AUTHOR

router.post('/', (req, res) => {
    Post.create(req.body, (err, madePosts) =>{
        if(err){
            console.log(err);
            res.send(err);
        } else {
            console.log(madePosts);
            res.redirect('/posts');
        }
    })
})

router.get('/new', (req, res) => {
    res.render('posts/new.ejs');
})

// DELETE

router.delete('/:id', (req, res) => {
    Post.findByIdAndDelete(req.params.id, (err, deletedPost) => {
        if(err){
            console.log(err);
            res.send(err);
        } else {
            console.log(deletedPost);
            res.redirect('/posts');
        }
    })
})

// EDIT

router.put('/:id', (req, res) => {
    Post.findByIdAndUpdate(req.params.id, req.body, (err, updatePost) => {
        if(err){
            console.log(err);
            res.send(err);
        } else {
            res.redirect('/posts')
        }
    })
})

router.get('/:id/edit', (req, res) => {
    Post.findById(req.params.id, (err, foundPost) => {
        if(err){
            console.log(err);
            res.send(err);
        } else {
            res.render('posts/edit.ejs', {posts: foundPost});
        }
    })
})


// SHOW ROUTE

router.get('/:id', (req, res) => {
    Post.findById(req.params.id, (err, foundPost) => {
        if(err){
            console.log(err);
            res.send(err);
        } else {
            res.render('posts/show.ejs', {posts: foundPost});
        }
    })
})










module.exports = router;