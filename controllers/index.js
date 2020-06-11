const Common = require('./common');
const async = require('async');
const WishModel = require('../model/wish');
const Constant = require('../constant/constant');
//配置导出对象
let exportObj = {
    getList,
    add
};
module.exports = exportObj;
//获取许愿列表的方法
function getList(req,res) {
  //定义一个async任务
  let task = {
    query: cb => {
      //使用Sequelize的model的findAll方法查询
      WishModel.findAll({
          limit: 10,
          order: [['create_at', 'DESC']],
      }).then(function(result) {
          let list = [];
          result.forEach((v,i) => {
              let obj = {
                  id: v.id,
                  name: v.name,
                  content: v.content
              };
              list.push(obj);
          });
          cb(null,list);
      }).catch(function (err) {
          //错误处理
          console.log(err)
          //通过async的回调，返回数据到下一个async方法
          cb(Constant.DEFAULT_ERROR)
      })
    }
  };
  //让async自动控制流程
  async.auto(tasks,function(err, result) {
      if(err) {
          console.log(err)
      } else {
          res.render('index',{
              list: result['query']
          })
      }
  })
}
//添加许愿列表的方法
function add() {

}