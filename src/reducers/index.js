import { combineReducers } from 'redux';
import BookReducer from './reducer_book';
import activeBook from "./reducer_active_book";
const rootReducer = combineReducers({
  books: BookReducer,
  activeBook: activeBook
});

export default rootReducer;
