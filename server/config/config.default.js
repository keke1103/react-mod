'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1527365172583_555';

  // add your config here
  config.middleware = [];

  config.security = {
      csrf: {
          enable: false,
      },
  };


  config.onerror = {
      // all(err, ctx) {
      //     // json hander
      //     // ctx.
      //     ctx.body = JSON.stringify({code:err.code||500, message: err.message||err.toString() }) ;
      // },
      html(err, ctx) {
          // html hander
          ctx.body = '<h3>error</h3>';
          ctx.status = 500;
      },
      json(err, ctx) {
          // json hander
          let code = err.message.split("thrown: ")[1];
          if(  Util.isRealNum(code) ){
              ctx.body = ERROR(code);
          }else{
              ctx.body = { code:500 , message: err.message };
          }
      },
  }
  return config;
};
