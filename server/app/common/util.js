/**
 * Created by Apple on 2018/8/4.
 */



module.exports = {
    /**
     * 是否为数字
     */
    isRealNum:function(val) {
        // isNaN()函数 把空串 空格 以及NUll 按照0来处理 所以先去除
        if (val === "" || val == null) {
            return false;
        }
        return !isNaN(val);
    }

};