require('./db/db');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = 3000;
const postController = require('./controllers/post');
const authorController = require('./controllers/author');

const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const morgan = require('morgan');


app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({extended: true}));
app.use('/authors', authorController);
app.use('/posts', postController);


app.get('/', (req, res) => {
    res.render('index.ejs');
});


app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
})








