import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from 'prop-types';
import Location from './Location'
import WeatherData from './WeatherData'
import './styles.css';
import transformWeather from '../../services/transformWeather'
import getUrlWeatherByCity from '../../services/getUrlWeatherByCity';


class WeatherLocation extends Component {

    constructor(props) {
        super(props);
        const {city}=props;
        this.state = {
            city,
            data: null,
        };
    }
    componentDidMount(){
        this.handleUpdateClick();
    }
    componentDidUpdate(prevProps,prevState){

    }

    handleUpdateClick = () => {
        const api_weather= getUrlWeatherByCity(this.state.city);
        fetch(api_weather).then(resolve => {
            return resolve.json();
        }).then(data => {
            const newWeather=transformWeather(data);
            this.setState({
                data: newWeather,
            });
        });
        
    }

    render() {
        const {weatherLocationClick}=this.props;
        const { city, data } = this.state;
        return (
            <div className="weatherLocationCont" onClick={weatherLocationClick}>
                <Location city={city}></Location>
                {data ? <WeatherData data={data}></WeatherData> : 
                <CircularProgress size={50} />
                }
            </div>
        );
    }
}

WeatherLocation.propTypes={
    city: PropTypes.string.isRequired,
    weatherLocationClick:PropTypes.func,
}
// http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=2f5fef0fdbe5d102277b452473db2e4d
// 2f5fef0fdbe5d102277b452473db2e4d
export default WeatherLocation;