if("production" !== process.env.NODE_ENV){
    module.exports = require('./config_store.dev');
} else {
    module.exports = require('./config_store.prod');
}