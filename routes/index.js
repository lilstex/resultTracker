let express = require('express');
let router = express.Router();
let bodyParser = require('body-parser');
let csrf = require('csurf');

let csrfProtection = csrf();
router.use(csrfProtection);
let urlencodedParser = bodyParser.urlencoded({extended: false});

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
  res.render('user/dashboard');
});

router.get('/signin', function(req, res, next) {
  res.render('user/signin');
});

router.get('/signup', function(req, res, next) {
  res.render('user/signup', {csrfToken: req.csrfToken()});
});

router.get('/contact', function(req, res, next) {
  res.render('contact');
});

router.get('/show', function(req, res, next) {
  res.render('user/show');
});

router.get('/about', function(req, res, next) {
  res.render('about');
});
module.exports = router;
