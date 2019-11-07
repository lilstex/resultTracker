var express = require('express');
var router = express.Router();


//let data = [{coursecode:}]
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'ResultTracker' });
});

router.get('/app', function(req, res, next) {
  res.render('app');
});


router.post('/app',function(req,res,next){

});
module.exports = router;
