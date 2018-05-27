/**
 * Created by Apple on 2018/5/27.
 */
import {combineReducers} from 'redux';
import developmentReducer from './developmentReducer';

const rootReducer = combineReducers({
    developmentReducer
});

export default rootReducer;