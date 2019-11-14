let express = require('express');
let router = express.Router();
let csrf = require('csurf');
const passport = require('passport');

let csrfProtection = csrf();
router.use(csrfProtection);

router.get('/app', function (req, res, next) {
  res.render('app', { csrfToken: req.csrfToken() });
});

router.get('/save', isLoggedIn, function (req, res, next) {
  res.render('save', { csrfToken: req.csrfToken() });
});

router.get('/dashboard', isLoggedIn, function (req, res, next) {
  let successMsg = req.flash('success')[0];
  let messages = req.flash('error');
  res.render('user/dashboard',{ messages: messages, hasErrors: messages.length > 0,successMsg: successMsg, noMessages: !successMsg});
});


router.get('/logout', isLoggedIn, function (req, res, next) {
  req.logout();
  res.redirect('/');
});


router.get('/signin', isNotLoggedIn, function (req, res, next) {
  let messages = req.flash('error');
  res.render('user/signin', { csrfToken: req.csrfToken(), messages: messages, hasErrors: messages.length > 0 });
});

router.post('/signin', isNotLoggedIn, passport.authenticate('local.signin', {
  //successRedirect: '/dashboard',
  failureRedirect: '/signin',
  failureFlash: true

}), function (req, res, next) {
  if (req.session.oldUrl) {
    let oldLink = req.session.oldUrl;
    req.session.oldUrl = null;
    res.redirect(oldLink);
  } else {
    res.redirect('/user/dashboard');
  }

});

router.get('/signup', isNotLoggedIn, function (req, res, next) {
  let messages = req.flash('error');
  res.render('user/signup', { csrfToken: req.csrfToken(), messages: messages, hasErrors: messages.length > 0 });
});

router.post('/signup', isNotLoggedIn, passport.authenticate('local.signup', {
  //successRedirect: '/dashboard',
  failureRedirect: '/signup',
  failureFlash: true

}), function (req, res, next) {
  if (req.session.oldUrl) {
    let oldLink = req.session.oldUrl;
    req.session.oldUrl = null;
    res.redirect(oldLink);

  } else {
    res.redirect('/user/dashboard');
  }

});



router.get('/contact', function (req, res, next) {
  res.render('contact');
});


module.exports = router;

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  req.session.oldUrl = req.url;
  res.redirect('/signin');
}

function isNotLoggedIn(req, res, next) {
  if (!req.isAuthenticated()) {
    return next();
  }
  res.redirect('/');
}