import React, {Component} from 'react'
import PropTypes from 'prop-types';
import {Router, browserHistory} from 'react-router'
import {Provider} from 'react-redux'

import configStore from '../store/'
import routes from '../common/routes'

const store = configStore();

export default class App extends Component {
    static propTypes = {
        store: PropTypes.object,
        routes: PropTypes.object,
        browserHistory: PropTypes.object
    };
    render() {
        return (
            <Provider store={store}>
                <Router store={store} routes={routes} history={browserHistory}/>
            </Provider>
        )
    }
}
