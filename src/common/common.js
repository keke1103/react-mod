import { notification, message } from 'antd';

/**
 * @func antd组件notification提示
 *
 * @param {string} type 提示的类型
 * @param {object} settings 提示标题和内容的对象
 * @param {object} options 提供定制化notification的参数, 可选
 */
export const statusNotification = (type, settings = { message: '友情提示', description: '' }, options) => {
    let _settings;
    if (options) {
        _settings = {
            ...settings,
            options
        }
    } else {
        _settings = settings;
    }
    notification[type](_settings);
};

export const myMessage = (type = 'success') => {
    if (type === 'success') {
        message.success('操作成功！');
    } else if (type === 'warn') {
        message.warning('操作失败');
    } else {
        message.error('服务器繁忙！');
    }
};

export const strCode = (str) => {
    str.replace(/(^s*)|(s*$)/g, ""); //trim　
    var strlen = 0;
    for (var i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) > 255) //如果是汉字，则字符串长度加2
            strlen += 2;
        else strlen++;
    }
    return strlen;
}




