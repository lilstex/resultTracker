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
  
  let result = Object.entries(req.body);
  console.log(result)
  res.render('show',{record:result});
});

router.get('/show', function(req, res, next) {
  res.render('show');
});

module.exports = router;
