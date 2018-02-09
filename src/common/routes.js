import React from 'react'
import {Router, Route, IndexRedirect} from 'react-router'

import Login from '../containers/Login'
// import Admin from '../containers/Admin'
export default
<Router>
    <Route path='/'>
        <IndexRedirect to='login'/>

        {/*<Route path='admin' component={Main}>*/}
            {/*<IndexRedirect to='admin-user'/>*/}
            {/*<Route path='admin-user' component={Admin}/>*/}
        {/*</Route>*/}
        <Route path='login' component={Login}/>
    </Route>
</Router>
