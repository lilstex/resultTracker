let express = require('express');
let router = express.Router();
let Result = require('../models/result');


router.get('/', function (req, res, next) {
  
  res.render('index', { title: 'ResultTracker' });
});


router.post('/app', function (req, res, next) {
  req.session.resultData = req.body;
  res.redirect('save');
});

router.post('/save', isLoggedIn, function (req, res, next) {

  let result = new Result({
    user: req.user,
    resultsData: req.session.resultData
  });
  result.save(function (err, result) {
    req.flash('success', 'Saved Successfully');
    res.redirect('/dashboard');
  });



});


router.get('/show', function (req, res, next) {
  res.render('user/show');
});

router.get('/about', function (req, res, next) {
  res.render('about');
});


module.exports = router;

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  req.session.oldUrl = req.url;
  res.redirect('/signin');
}