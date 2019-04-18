require('./db/db');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
// const router = express.Router();
const port = 3000;
const postController = require('./controllers/post');
const authorController = require('./controllers/Author');

const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const morgan = require('morgan');


app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({extended: true}));
app.use('/blog', authorController)

// postController

app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
})








