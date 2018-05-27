/**
 * Created by Apple on 2018/5/27.
 */


import {ACTION_CODE} from '../actions/developmentAction';

const DevelopmentReducer = (state = {reactUi:null}, action)=>{
    switch (action.type){
        case ACTION_CODE.GET_UI:

            return {
                ...state,
                reactUi:action.reactUi
            };
        default:
            return{
                ...state
            };

    }
};

export default DevelopmentReducer