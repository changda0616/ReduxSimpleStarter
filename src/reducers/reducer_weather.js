import { FETCH_WEATHER } from "../actions/index";

export const reducerWeather = ( state = null,action) => {
    switch (action.type){
        case FETCH_WEATHER:
            console.log(action.payload)
        default :
            return state;
    }
    
}
