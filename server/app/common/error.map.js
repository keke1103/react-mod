'use strict';
/**
 * Created by Apple on 2018/8/4.
 */
let errorMap = {
    0:"success",
    1001:"未定义错误码",
    500:"服务器异常",
    7000:"参数不完整",
    501:"未知错误类型"
}



let Error =  function(code,strack){

    return {
        code:Number(code),
        message: errorMap[Number(code)]||errorMap[1001],
        strack
    };
}
module.exports = Error;

Error.NOT_FOUND_ERROR =  Error(1001);
Error.SERVER_ERROR = Error(500);
Error.SERVER_ERROR = Error(7000);
Error.FORMAT_ERROR =(strack)=> Error(501,strack);

