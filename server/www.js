/**
 * Created by Apple on 2018/5/27.
 */

const egg = require('egg');

const workers = Number(process.argv[2] || 2/*require('os').cpus().length*/);
egg.startCluster({
    workers,
    baseDir: __dirname,
});