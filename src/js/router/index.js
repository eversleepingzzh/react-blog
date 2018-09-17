import React from 'react'
import {
    HashRouter as Router,
    Route,
    Switch,
    Redirect,
} from 'react-router-dom'

import Home from '../container/Home.js' 
import Write from '../container/Write.js' 
import Detail from '../container/Detail.js' 

const AppRouter = () => (
    <Router>
        <div>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/write" component={Write} />
                <Route path="/detail/:id" component={Detail} />
            </Switch>
        </div>
    </Router>
)

export default AppRouter