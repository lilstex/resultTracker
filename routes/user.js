let express = require('express');
let router = express.Router();
let csrf = require('csurf');
const passport = require('passport');

let csrfProtection = csrf();

router.use(csrfProtection);
router.get('/signin', function(req, res, next) {
  let messages = req.flash('error');
    res.render('user/signin',{csrfToken: req.csrfToken(), messages: messages, hasErrors: messages.length > 0});
});

router.post('/signin',passport.authenticate('local.signin',{
  successRedirect: '/dashboard',
  failureRedirect: '/signin',
  failureFlash: true

}));

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
