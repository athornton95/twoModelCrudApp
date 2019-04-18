const mongoose = require('mongoose');

const authorsSchema = new mongoose.Schema({
    Name: {type: String, required: true, unique: true},
});

const Author = mongoose.model('Author', authorsSchema);

module.exports = Author;