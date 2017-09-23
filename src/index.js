import React from 'react'
import ReactDOM from 'react-dom'
import Root from './components/Root'
import registerServiceWorker from './registerServiceWorker'
import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {Provider} from 'react-redux'
import {dashboard} from './reducers/dashboard'
import {cursosForm} from './reducers/cursosForm'

const reducers = combineReducers({dashboard, cursosForm})
const store = createStore(reducers, applyMiddleware(thunkMiddleware));

ReactDOM.render(
  <Provider store={store}>
    <Root/>
  </Provider>
  , document.getElementById('root'))
registerServiceWorker()
