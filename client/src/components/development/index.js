/**
 * Created by ke on 2018/5/27.
 */

import React, { Component } from 'react';
import './style.css';
import {Button} from 'antd';

export default class DevelopmentComp extends Component{

    constructor(){
        super();
    }

    render(){
        const {RUI } = this.props;
        console.log('ui',RUI);
        let data =RUI&& RUI.foo;

        return <div className= 'development-box' >
            Hello
            <p>{data}</p>
            <Button > 按钮</Button>
            {RUI&&<RUI >HAHA</RUI> }
        </div>
    }

};