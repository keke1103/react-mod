import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import LoginForm from '../components/login_form';


/**
 * @url https://www.cnblogs.com/wonyun/p/5930333.html
 */
class Login extends Component{
    static propTypes = {//初始化属性值类型(isRequired，代表不能为空)
        isFetching:PropTypes.bool.isRequired
    };

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