import React from 'react'
import {Switch, Route} from 'react-router-dom'
import { Dashboard } from './pages'

const Routes = () => {
    return (
        <Switch>
            <Route path="/dashboard" component={ Dashboard }/>
        </Switch>
    )
}

export default Routes