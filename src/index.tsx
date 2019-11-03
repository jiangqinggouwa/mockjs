import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import Data from './getData'
import App from './components/asyncText'
import reducer from './store/reducer/index'
import {createStore, applyMiddleware} from 'redux'
// fetch('/repos/jaywcjlove/webpack-api-mocker')
//   .then(response => response.json())
//   .then(data => {
//     document.getElementById('root').innerText = `from github api: webpack-api-mocker star count: ${data.stargazers_count}`
//   });
const middleware = [thunk]
const store = createStore(reducer,applyMiddleware(...middleware))
ReactDOM.render(
  <Provider store={store as any}>
    <App/>
  </Provider>,
  document.getElementById('root')
)