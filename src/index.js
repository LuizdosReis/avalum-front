import React from 'react'
import ReactDOM from 'react-dom'
import Root from './components/Root'
import registerServiceWorker from './registerServiceWorker'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { dashboard } from './reducers/dashboard'

const store = createStore(dashboard);

ReactDOM.render(
  <Provider store={ store }>
    <Root />
  </Provider>
  , document.getElementById('root'))
registerServiceWorker()
