import React from 'react'
import ReactDOM from 'react-dom'
import Root from './components/Root'
import registerServiceWorker from './registerServiceWorker'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { dashboard } from './reducers/dashboard'
import thunkMiddleware from 'redux-thunk'

const store = createStore(dashboard, applyMiddleware(thunkMiddleware));

ReactDOM.render(
  <Provider store={ store }>
    <Root />
  </Provider>
  , document.getElementById('root'))
registerServiceWorker()
