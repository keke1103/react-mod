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
        const {isFetching} = this.props;
        const {getFieldDecorator} = this.props.form;
        return(
            <div className={css.login}>
                <div className='head'>
                    <img src="/build/logo.png" alt=""/>
                    <h3>智蜂客管理员</h3>
                </div>
                <Form   className="login-form">
                    <FormItem>
                        {
                            getFieldDecorator('username',
                                {
                                    rules:[{required:true,message:'请输入用户名'}]
                                })(
                                <Input addonBefore={<Icon type='user'/>} placeholder='Username'/>
                            )
                        }
                    </FormItem>
                    <FormItem>
                        {
                            getFieldDecorator('password',
                                {
                                    rules:[{required:true,message:'请输入密码'}]
                                })(
                                <Input addonBefore={<Icon type='lock'/>} placeholder='Password' type='password'/>
                            )
                        }
                    </FormItem>
                    <FormItem>
                        <Button type='primary' htmlType='submit' loading={isFetching} className='login-form-button' >{isFetching?'登录中...':'登录'}</Button>
                    </FormItem>
                </Form>
            </div>

        );
    }

}

const NormalLoginForm = Form.create()(LoginForm);

export default NormalLoginForm