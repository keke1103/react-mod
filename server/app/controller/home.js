'use strict';

const Controller = require('./BaseController');



class HomeController extends Controller {
  async index() {
    this.success('hi, egg f');
  }
  async testFail() {
    const code = this.ctx.request.query.code;
    // this.fail(code);
    //   this.fail(ERROR(code));


    throw code;
  }
  async getSession(){

    let req = this.ctx.request;
    let role = req.query.role;
    console.log(req.header);
    let action = req.query.action;
    let result = await this.ctx.curl('http://192.168.3.18/api/backend/v1/auth/session?roles='+role+'&action='+action, {
      // 自动解析 JSON response
       dataType: 'json',
        headers:req.header ,
      // 3 秒超时
       timeout: 3000,
    });




      this.ctx.body = result.data;
  }
}

module.exports = HomeController;
