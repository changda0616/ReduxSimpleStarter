import axios from 'axios'

const API_KEY = 'bbe12933c75c349a33520b27eb60d35a';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`
export const FETCH_WEATHER = 'FETCH_WEATHER'

export default function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`
    const request = axios.get(url);
    return {
        type: FETCH_WEATHER,
        payload: request
    }
}