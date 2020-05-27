var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.url);
  res.render('index', { 
    title: 'HELLO',
    name: 'Menoen',
    age: '26',
    happy: true
 });
});
router.get('/world/:id', function(req,res,next) {
  console.log('111111');
  res.render('index', { title: 'HELLO WORLD1' });
});

module.exports = router;
