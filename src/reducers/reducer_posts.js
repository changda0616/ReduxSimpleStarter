import _ from 'lodash'
import { FETCH_POSTS, CREATE_POST, FETCH_POST } from '../actions/index'

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_POST:
      // const post = acitons.payload.data
      // const newState = {...state}
      // newState[post.id] = post
      // return newState
      console.log(action)
      return { ...state, [action.payload.data.id]: action.payload.data }
      // [] es6 syntax -> this doesn't create array but generate a key for object
    case FETCH_POSTS:
      console.log(action)
      return _.mapKeys(action.payload.data, 'id')
    case CREATE_POST:
      console.log(action.payload)
      return action.payload
    default:
      return state
  }
}
