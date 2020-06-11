const Sequelize = require('sequelize');  //引入sequelize模块
const db = require('../db');            //引入数据库实例
//定义model
const Wish = db.define('Wish', {
    id: {                           //主键
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    name: {                         //许愿姓名
        type: Sequelize.STRING(20),
        allowNull: false
    },
    content: {                      //许愿内容
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
        underscored: true,          //是否支持驼峰
        tableName: 'wish'           //MYSQL数据库表名
    });
module.exports = Wish;