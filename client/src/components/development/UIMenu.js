/**
 * Created by Apple on 2018/5/27.
 */

import React, { Component } from 'react';

import { ContextMenu, MenuItem } from "react-contextmenu";
import './ui_menu.css';
import {Button,Icon ,Radio } from "antd";

export default class UiMenu extends  Component{

  constructor(){
      super();
      this.handleItemClick = this.handleItemClick.bind(this);
  }

    handleItemClick(e, data) {
        // console.log(e.target);
        // console.log(e);
        // console.log(data.foo);
        switch (data.foo){
            case 1:
                this.props.handleSetRUI(Button);
                break;
            case 2:
                this.props.handleSetRUI(Icon);
                break;
            case 3:
                this.props.handleSetRUI(Radio);
                break;
        }

    }

  render(){
      return  <ContextMenu id="some_unique_identifier" >
          <MenuItem data={{foo: 1}} onClick={this.handleItemClick}>
              锁定
          </MenuItem>
          <MenuItem data={{foo: 2}} onClick={this.handleItemClick}>
              插入
          </MenuItem>

          <MenuItem data={{foo: 3}} onClick={this.handleItemClick}>
              删除
          </MenuItem>
      </ContextMenu>

  }
};