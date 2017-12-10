import { FETCH_WEATHER } from "../actions/index";

export default function weatherReducer( state=[], action){
    switch (action.type){
    case FETCH_WEATHER:
        // return state.concat([action.payload.data])
        // approach1, but dont use push
        return [ action.payload.data, ...state ]
    default :
        return state;
    }
}
