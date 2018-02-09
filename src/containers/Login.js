import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import LoginForm from '../components/login_form';
//登录界面
class Login extends Component{

    //初始化state参数
    getInitialState(){
        return {
            isFetching:false
        }
    }

    //构造函数
    constructor(){
        super();
    }

    //页面将要被创建
    componentWillMount(){
    }

    //dom节点渲染函数
    render(){
        const {isFetching } = this.props;
        return (
            <LoginForm  isFetching={isFetching} />
        )
    }
};

const mapStateToProps = (state) => {
    const {isFetching} = state.roleReducer;
    return {
        isFetching
    }
};

export default connect(mapStateToProps)(Login)