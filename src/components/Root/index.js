import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Routes from '../../routes.js'
import './Root.css'

class Root extends Component {
  render () {
    return (
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    )
  }
}

export default Root
