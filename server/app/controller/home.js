'use strict';

const Controller = require('./BaseController');

class HomeController extends Controller {
  async index() {
    this.success('hi, egg');
  }
  async testFail(){
   let code = this.ctx.request.query.code ;
    // this.fail(code);
    //   this.fail(ERROR(code));
    
      throw code;
  }
}

module.exports = HomeController;
