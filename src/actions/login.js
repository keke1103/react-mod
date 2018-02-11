
import { statusNotification} from '../common/common'
import config from '../common/config'

import {post} from '../common/http'

export const REQUEST_LOGIN = 'REQUEST_LOGIN';
export const REQUEST_ERROR = 'REQUEST_ERROR';

const requestLogin = () => ({
    type: REQUEST_LOGIN
});

const errorLogin = () => ({
    type: REQUEST_ERROR
});


export const fetchUserLogin = (username, password) => dispatch => {
    dispatch(requestLogin());
    const doneFn = data => {
        dispatch(receiveLogin(data.result.groups));
        statusNotification('success', {message: '登录成功', description: '即将跳转'});
    };
    const failFn = (errMsg) => {
        dispatch(errorLogin());
        statusNotification('error', {message: '提示', description:'登录失败：'+ errMsg.toString()});
        post(`${config.api}/auth/logout`, {}, null, null);
    };
    post(`${config.api}/auth/login`, {username, password}, doneFn, failFn);

};

