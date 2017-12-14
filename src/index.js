import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { BrowserRouter, Route } from 'react-router-dom'
import App from './components/app'
import PostsIndex from './components/posts_index'
import reducers from './reducers'
import promise from 'redux-promise'

const createStoreWithMiddleware = applyMiddleware(promise)(createStore)
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Route path='/' component={PostsIndex} />
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'))
