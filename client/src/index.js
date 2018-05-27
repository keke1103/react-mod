import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import './index.css';
import App from './App';
import DEV from './Development';

import configStore from './store';
import registerServiceWorker from './registerServiceWorker';

const store = configStore('');

let env = process.env.NODE_ENV;

ReactDOM.render(
    <Provider store={store}>
    <BrowserRouter >
        {
            env === 'development'?  <DEV  />:<App />
        }
    </BrowserRouter>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
