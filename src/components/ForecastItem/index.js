import React from 'react';
import PropTypes from 'prop-types';
import WeatherData from '../WeatherLocation/WeatherData'


const ForecasItem = ({ weekDay, hour,data }) => (
    <div>
        <div>{weekDay} Hora: {hour} hrs</div>
        <WeatherData data={data}></WeatherData>
    </div>
);
ForecasItem.propTypes = {
    weekDay: PropTypes.string.isRequired,
};

export default ForecasItem;