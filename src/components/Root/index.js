import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
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