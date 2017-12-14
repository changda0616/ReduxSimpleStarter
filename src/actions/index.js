import axios from 'axios'
export const FETCH_POST = 'FETCH_POST'
const ROOT_URL = 'http://reduxblog.herokuapp.com/api'
const API_KEY = '?key=chad123'
export function fetchPosts () {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`)
  return {
    type: FETCH_POST,
    return: request
  }
}
