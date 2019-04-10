import  React,{ Component } from 'react';
import Location from './Location'
import WeatherData from './WeatherData'
import './styles.css';
import { SUN ,SNOW} from '../../constants/weathers';

const data = {
    temperature: 35,
    weatherState: SUN,
    humidity: 10,
    wind: '10 m/s',
};
const data2 = {
    temperature: -4,
    weatherState: SNOW,
    humidity: 5,
    wind: '50 m/s',
};

class WeatherLocation extends Component {

    constructor(){
        super();
        this.state={
            city:'Santiago',
            data:data,
        };
    }

    handleUpdateClick=()=>{
        console.log('actualizado');
        this.setState({
            city:'Estocolmo',
            data:data2,
        });
    }

    render() 
    {
        const{city,data}=this.state;
        return (
        <div className="weatherLocationCont">
            <Location city={city}></Location>
            <WeatherData data={data}></WeatherData>
            <button onClick={this.handleUpdateClick} >Actualizar</button>
        </div>
        );
    }
}

export default WeatherLocation;