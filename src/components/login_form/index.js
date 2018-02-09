import React, {Component} from 'react';

import {Form, Icon, Input, Button} from 'antd';
import md5 from 'blueimp-md5'
import css from './login_form.css'

const FormItem = Form.Item;

class LoginForm extends Component{

    //构造器
    constructor(){
        super();
    }

    render(){
        return(
            <div className={css.login}>
                <div className='head'>
                    <img src="/build/logo.png" alt=""/>
                    <h3>智蜂客管理员</h3>
                </div>

            </div>

        );
    }

}

const NormalLoginForm = Form.create()(LoginForm);

export default NormalLoginForm