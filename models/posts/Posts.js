const mongoose = require('mongoose');

const postsSchema = new mongoose.Schema({
   title: {type: String, required: true, unique: true},
   body: {type: String, required: true, maxlength: 500},
   author: {type: String, required: true, unique: true},
   date: Date
});

const Post = mongoose.model('Post', postsSchema);

module.exports = Post;