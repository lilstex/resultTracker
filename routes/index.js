let express = require('express');
let router = express.Router();
let csrf = require('csurf');
const passport = require('passport');

let csrfProtection = csrf();



router.get('/', function(req, res, next) {
  res.render('index', { title: 'ResultTracker' });
});

router.get('/app', function(req, res, next) {
  res.render('app');
});

let data = [];
router.post('/app',function(req,res,next){
  
  let result = Object.values(req.body);
  console.log(result)
  res.render('user/dashboard',{record:result});
});

router.get('/dashboard', function(req, res, next) {
  res.render('user/dashboard');
});

router.get('/show', function(req, res, next) {
  res.render('user/show');
});

router.get('/about', function(req, res, next) {
  res.render('about');
});


router.use(csrfProtection);
router.get('/signin', function(req, res, next) {
  res.render('user/signin');
});

router.get('/signup', function(req, res, next) {
  let messages = req.flash('error');
    res.render('user/signup',{csrfToken: req.csrfToken(), messages: messages, hasErrors: messages.length > 0});
});

router.post('/signup',passport.authenticate('local.signup',{
  successRedirect: '/dashboard',
  failureRedirect: '/signup',
  failureFlash: true

}));

router.get('/contact', function(req, res, next) {
  res.render('contact');
});


module.exports = router;
