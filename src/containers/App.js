import React, {Component, PropTypes} from 'react'
import {Router, browserHistory} from 'react-router'
import {Provider} from 'react-redux'

import configStore from '../store/'
import routes from '../common/routes'

const store = configStore();

export default class App extends Component {
    static PropTypes = {
        store: PropTypes.object.isRequired,
        routes: PropTypes.object.isRequired,
        browserHistory: PropTypes.object.isRequired
    };
    render() {
        return (
            <Provider store={store}>
                <Router store={store} routes={routes} history={browserHistory}/>
            </Provider>
        )
    }
}
