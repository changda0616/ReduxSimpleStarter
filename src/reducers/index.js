import { combineReducers } from 'redux';
import {reducerWeather} from "./reducer_weather";
const rootReducer = combineReducers({
  reducerWeather
});

export default rootReducer;
