import React, { Component } from 'react'
import { connect } from "react-redux"
import Chart from '../components/chart'
import GoogleMap from '../components/google_map'
export class WeatherList extends Component {
    renderWeather(cityData) {
        const name = cityData.city.name
        const temps = cityData.list.map(weather => weather.main.temp)
        const Pressures = cityData.list.map(weather => weather.main.pressure)
        const humidities = cityData.list.map(weather => weather.main.humidity)
        const { lon, lat } = cityData.city.coord;
        return (
            <tr key={cityData.city.id}>
                <td><GoogleMap lon={lon} lat={lat}/></td>
                <td>
                    <Chart data={temps} color="orange" unit="K" />
                </td>
                <td>
                    <Chart data={Pressures} color="gray" unit="hPA" />
                </td>
                <td>
                    <Chart data={humidities} color="blue" unit="%" />
                </td>
            </tr>
        )
    }
    render() {
        return (
            <table className='table table-hover'>
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        )
    }
}

function mapStateToProps({ weather }) {
    return { weather }
}
// equal to above
// function mapStateToProps(state){
//     return {weather:state.weather}
// } 
export default connect(mapStateToProps)(WeatherList)