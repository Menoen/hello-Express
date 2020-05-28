const obj = {
    //默认请求成功
    DEFAULT_SUCCESS: {
        code: 00000,
        msg: ''
    },
    //默认请求失败
    DEFAULT_ERROR: {
        code: 60000,
        msg: '系统错误'
    },
    //定义错误返回-缺少必要参数
    LACK: {
        code: 10000,
        msg: '缺少必要的参数'
    }
}
module.exports = obj; //导出对象