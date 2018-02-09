import {browserHistory} from 'react-router'

import { statusNotification} from '../common/common'
import config from '../common/config'
import constants from '../common/constants'

import {post} from '../common/http'

export const REQUEST_LOGIN = 'REQUEST_LOGIN';
export const RECEIVE_LOGIN = 'RECEIVE_LOGIN';
export const ERROR_LOGIN = 'ERROR_LOGIN';
export const CHECKOUT_ROLES = 'CHECKOUT_ROLES';
export const REQUEST_LOGOUT = 'REQUEST_LOGOUT';
export const RECEIVE_LOGOUT = 'RECEIVE_LOGOUT';

const requestLogin = () => ({
    type: REQUEST_LOGIN
});

const receiveLogin = (roles) => ({
    type: RECEIVE_LOGIN,
    roles
});

const errorLogin = () => ({
    type: ERROR_LOGIN
});

const requestLogout = () => ({
    type: REQUEST_LOGOUT
});

const receiveLogout = () => ({
    type: RECEIVE_LOGOUT
});

export const fetchUserLogin = (username, password) => dispatch => {
    dispatch(requestLogin());
    const doneFn = data => {
        dispatch(receiveLogin(data.result.groups));
        statusNotification('success', {message: '登录成功', description: '即将跳转'});
        localStorage.setItem(constants.LOGIN_FLAG, data.result.groups);
        setTimeout(() => {
            switch (Math.abs(parseInt(data.result.groups))) {
                case 1:
                    return browserHistory.push('/admin');
                case 2:
                    return browserHistory.push('/factory');
                case 3:
                    return browserHistory.push('/intbeer');
                case 4:
                    return browserHistory.push('/finance');
                case 5:
                    return browserHistory.push('/cashier')
                case 7:
                    return browserHistory.push('/dev')
                default:
                    return browserHistory.push('/default/no-roles');
            }
        }, 1000);
    };
    const failFn = (errMsg) => {
        dispatch(errorLogin());
        statusNotification('error', {message: '提示', description:'登录失败：'+ errMsg.toString()});
        post(`${config.api}/auth/logout`, {}, null, null);
    };
    post(`${config.api}/auth/login`, {username, password}, doneFn, failFn);

};

export const checkoutRoles = (roles) => ({
    type: CHECKOUT_ROLES,
    roles
});

export const fetchUserLoginout = () => dispatch => {
    dispatch(requestLogout());
    const doneFn = () => {
        dispatch(receiveLogout());
        localStorage.setItem(constants.LOGIN_FLAG, '');
        window.location.href = '/login';
    };
    const failFn = errMsg => {
        statusNotification('error', {message: '提示', description: errMsg.toString()});
    };
    post(`${config.api}/auth/logout`, {}, doneFn, failFn);
};
