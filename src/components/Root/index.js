import React, { Component } from 'react'
import { Route, BrowserRouter } from 'react-router-dom'
import Dashboard from '../../pages/Dashboard'
import Routes from '../../routes.js'

class Root extends Component {
    render() {
        return (
            <BrowserRouter>
                <Routes/>
            </BrowserRouter>
        )
    }
}

export default Root