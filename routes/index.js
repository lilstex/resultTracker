let express = require('express');
let router = express.Router();



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






module.exports = router;
