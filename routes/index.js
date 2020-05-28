var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   console.log(req.url);
//   res.render('index', { 
//     title: 'HELLO',
//     name: 'Menoen',
//     age: '26',
//     happy: true
//  });
// });
// router.get('/world/:id', function(req,res,next) {
//   console.log('111111');
//   res.render('index', { title: 'HELLO WORLD1' });
// });
const IndexController = require('../controllers/index');
router.get('/',IndexController.getList); //定义首页路由
router.get('/add',IndexController.add); //定义提交表单路由
module.exports = router;
