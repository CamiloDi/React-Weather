import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import transformForecast from '../services/transformForecast';

import './styles.css';

// const days =[
//     'Lunes',
//     'Martes',
//     'Miercoles',
//     'Jueves',
//     'Viernes',
// ];
// const data = {
//     temperature: 10,
//     weatherState: 'normal',
//     humidity: 10,
//     wind: 'normal',
// };

const api_key = "2f5fef0fdbe5d102277b452473db2e4d";
const url_base_weather = "http://api.openweathermap.org/data/2.5/forecast";
class ForecastExtended extends Component {

    constructor() {
        super();
        this.state = { forecastData: null };
    }

    renderForecastItemDays = (forecastData) => {
        console.log('hola');
          return forecastData.map(forecast =>(
          <ForecastItem 
          key={`${forecast.weekDay}${forecast.hour}`}
          weekDay={forecast.weekDay}
          hour={forecast.hour}
           data={forecast.data}
           ></ForecastItem>));
    }
    renderProgress = () => {
        //  return days.map(day =>(<ForecastItem weekDay={day} hour={10} data={data}></ForecastItem>));
        return <h3>Cargando Pronostico Extendido... </h3>;
    }

    componentDidMount() {
        this.updateCity(this.props.city);
    }
    componentWillReceiveProps(nextProps) {
        if(nextProps.city!==this.props.city){
            this.setState({forecastData:null});
            this.updateCity(nextProps.city)
        }
    }
    
    updateCity=city=>{
        const url_forecast = `${url_base_weather}?q=${city}&appid=${api_key}`;
        fetch(url_forecast)
            .then(data => data.json())
            .then(weatherData => {
                console.log(weatherData);
                const forecastData = transformForecast(weatherData);
                this.setState({ forecastData });
            })
            .catch(err => { console.error(err); });
    }


    render() {
        const { city } = this.props;
        const { forecastData } = this.state;
        return (
            <div>
                <h2 className='forecast-title' >Pronóstico Extendido para {city}</h2>
                {forecastData ?
                    this.renderForecastItemDays(forecastData) :
                    this.renderProgress()}
            </div>);
    };
}
ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
};
export default ForecastExtended;