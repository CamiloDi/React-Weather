import React, { Component } from 'react';
import convert from 'convert-units';
import Location from './Location'
import WeatherData from './WeatherData'
import './styles.css';
import { SUN } from '../../constants/weathers';
import transformWeather from '../../services/transformWeather'
import { api_weather } from '../../constants/api_url';





const data = {
    temperature: 35,
    weatherState: SUN,
    humidity: 10,
    wind: '10 m/s',
};


class WeatherLocation extends Component {

    constructor() {
        super();
        this.state = {
            city: 'Santiago',
            data: data,
        };
    }
    componentDidMount(){
        this.handleUpdateClick();
    }
    componentDidUpdate(prevProps,prevState){
        
    }

    handleUpdateClick = () => {
        fetch(api_weather).then(resolve => {
            return resolve.json();
        }).then(data => {
            const newWeather=transformWeather(data);
            this.setState({
                // city: 'Estocolmo',
                data: newWeather,
            });
        });
        
    }

    render() {
        const { city, data } = this.state;
        return (
            <div className="weatherLocationCont">
                <Location city={city}></Location>
                <WeatherData data={data}></WeatherData>
                <button onClick={this.handleUpdateClick} >Actualizar</button>
            </div>
        );
    }
}
// http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=2f5fef0fdbe5d102277b452473db2e4d
// 2f5fef0fdbe5d102277b452473db2e4d
export default WeatherLocation;