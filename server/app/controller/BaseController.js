/**
 * Created by Apple on 2018/8/4.
 */

'use strict';

const Controller = require('egg').Controller;

class BaseController extends Controller {

     success(result){
        this.ctx.body ={
            code:0,
            message:'success',
            result:result
        };
    }


    fail(error){
         let err;
        if(Util.isRealNum(error)){
            err = ERROR(error);
        }else{
            if(Util.isRealNum(error.code)){
                err =  error;
            }else{
                err = ERROR.FORMAT_ERROR(error) ;
            }

        }

        this.ctx.body = err;
    }
}

module.exports = BaseController;
