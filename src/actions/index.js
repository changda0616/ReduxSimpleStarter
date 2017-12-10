import axio from 'axios'

const API_KEY = '58873943a4f570a0561f3779c1e1df79'
const ROOT_URL = `http://api.openweathermap.org/data/2.5/weather` 
export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city){
    const url = `${ROOT_URL}&q=${city},us&appid=${API_KEY}`
    const request = axio.get(url);
    console.log(url)
    console.log('Request', request)
    return {
        type : FETCH_WEATHER,
        payload: request
    }
}