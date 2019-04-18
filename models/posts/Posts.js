const mongoose = require('mongoose');

const postsSchema = new mongoose.Schema({
   Title: {type: String, required: true, unique: true},
   Body: {type: String, required: true, maxlength: 500},
   Author: {type: String, required: true, unique: true},
   Date: Date
});

const Post = mongoose.model('Post', postsSchema);

module.exports = Post;