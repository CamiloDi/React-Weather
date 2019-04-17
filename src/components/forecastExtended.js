import React,{Component} from 'react';
import PropTypes from 'prop-types';

import './styles.css';

class ForecastExtended extends Component{

    render(){
        const {city}= this.props;
        return (<div>Pronostico Extendido para {city}</div>);
    };
}
ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
};
export default ForecastExtended;