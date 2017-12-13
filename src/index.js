import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { BrowserRouter, Route } from 'react-router-dom'
import App from './components/app'
import reducers from './reducers'

const createStoreWithMiddleware = applyMiddleware()(createStore);

class Hello extends Component {
  render () {
    return (
      <div>hello!</div>
    )
  }
}
class GoodBye extends Component {
  render () {
    return (
      <div>GoodBye!</div>
    )
  }
}
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Route path='/' component={Hello} />
        <Route path='/bye' component={GoodBye} />
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'))
