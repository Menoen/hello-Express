//默认dev配置
const config = {
    DEBUG: true,            //是否调试模式
    MYSQL: {
        host: 'localhost',  //MySQL主机地址
        database: 'wish',   //MySQL数据库名
        username: 'root',   //MySQL用户名
        password: 'root'    //MySQL密码
    }
};
if (process.env.NODE_ENV === 'production') {
    //生产环境Mysql数据库连接配置
    config.MYSQL = {
        //host: 'aaa.mysql.rds.aliyun.com',
        // database: 'wish',   //MySQL数据库名
        // username: 'root',   //MySQL用户名
        // password: 'root'    //MySQL密码
    }
}
module.exports = config;