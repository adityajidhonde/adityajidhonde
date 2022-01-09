//Import libraries
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
const mongoose = require('mongoose');
var app = express();
const authR = require('./routes/authRoutes');
const cookieParser = require('cookie-parser');
const { requireAuth, checkUser } = require('./middleware/authMiddleware');

//Set static files with express
app.use(express.static(__dirname +'/public'));
app.use(express.urlencoded({extended: true})); 
app.use(express.json());  
app.use(cookieParser());

app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost/probase', {
	useNewUrlParser: true
});


app.get('*', checkUser);
app.get('/', (req, res) => res.render('home'));
app.get('/compile', requireAuth, (req, res) => res.render('index'));
app.use(authR);

app.listen(808);