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

//DELETE

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









module.exports = router;