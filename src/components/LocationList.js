import React from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from './WeatherLocation'
import './styles.css';


const LocationList = ({ cities,onSelectLocation }) => {
    const handleWeatherLocationClick=city=>{
        onSelectLocation(city);
    };
    const strToComponents = cities => (
        cities.map((city) =>
            <WeatherLocation
                key={city}
                city={city}
                weatherLocationClick={()=>handleWeatherLocationClick(city)}
            />
        )
    );
    return (
        <div className="locationList">
            {strToComponents(cities)}
        </div>);
};

LocationList.propTypes = {
    cities: PropTypes.array.isRequired,
    onSelectLocation:PropTypes.func,
};

export default LocationList;