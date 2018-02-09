import {createStore, applyMiddleware, compose} from 'redux'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'
import rootReducer from '../reducers/'

const enhancer = compose(
    applyMiddleware(thunk, createLogger())
);

const configStore = initialState => {
    const store = createStore(rootReducer, initialState, enhancer);
    if(module.hot){
        module.hot.accept('../reducers/', () => {
            store.replaceReducer(require('../reducers/').default);
        })
    }
    return store;
};

export default configStore