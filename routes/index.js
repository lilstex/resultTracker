var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false});

//let data = [{coursecode:}]
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'ResultTracker' });
});

router.get('/app', function(req, res, next) {
  res.render('app');
});

let data = [];
router.post('/app',urlencodedParser,function(req,res,next){
  
  let result = Object.values(req.body);
  console.log(result)
  res.render('dashboard',{record:result});
});

router.get('/dashboard', function(req, res, next) {
  res.render('dashboard');
});

router.get('/signin', function(req, res, next) {
  res.render('signin');
});

router.get('/signup', function(req, res, next) {
  res.render('signup');
});

router.get('/contact', function(req, res, next) {
  res.render('contact');
});

router.get('/show', function(req, res, next) {
  res.render('show');
});

router.get('/about', function(req, res, next) {
  res.render('about');
});
module.exports = router;
