/**
 * Created by ke on 2018/5/27.
 */

import React, { Component } from 'react';
import { ContextMenuTrigger } from "react-contextmenu";
import {connect} from 'react-redux';
import DevelopmentComp from './components/development';
import UIMenu from './components/development/UIMenu';
import {fetchGetUi} from './actions/developmentAction';

import './Development.css'

class Development extends Component{

    constructor(){
        super();
        this.handleSetRUI = this.handleSetRUI.bind(this);
    }


    handleSetRUI (ui){

        this.props.dispatch( fetchGetUi(ui));
    }
    render() {

        return <div>
            <ContextMenuTrigger id="some_unique_identifier" collect={(em)=>{
                console.log('collect',em.renderTag,em);
            }}>
                <DevelopmentComp RUI = {this.props.reactUi}></DevelopmentComp>
            </ContextMenuTrigger>
            <UIMenu handleSetRUI={this.handleSetRUI} />
        </div>
    }
};

const mapStateToProps = state => {
    const {reactUi} = state.developmentReducer;
    console.log(reactUi);
    return {
        reactUi
    }
};
export default connect(mapStateToProps)(Development)

