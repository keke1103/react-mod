'use strict';

const Controller = require('./BaseController');

class HomeController extends Controller {
  async index() {
    this.success('hi, egg');
  }
  async testFail(){
   let code = this.ctx.request.query.code ;
    this.fail(code);
  }
}

module.exports = HomeController;
