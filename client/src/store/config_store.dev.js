import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk';
import rootReducer from '../reducers';


const configStore = (initialState) => {

    const store = applyMiddleware(thunk)(createStore)(rootReducer, initialState);

    if(module.hot){
        module.hot.accept('../reducers/', () => {
            store.replaceReducer(require('../reducers/').default);
        })
    }
    return store;
};

export default configStore;