import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
// import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography'
import ToolBar from '@material-ui/core/Toolbar'
import './App.css';
import LocationList from './components/WeatherLocation/LocationList';

const cities = ['Santiago,CL',
  'Stockholm, SE',
  'Buenos Aires,AR',
  'New York,USA',
  'Madrid, ES',
  'Paris,FR',
  'Tokyo,JP'
];
class App extends Component {
  handleSelectionLocation = city => {
    console.log('app', city);
  };
  render() {
    return (
      <Grid>
        <Row>
          <AppBar position='sticky'>
            <ToolBar>
              <Typography variant='title' color='inherit'>
                Weather APP
              </Typography>
            </ToolBar>
        </AppBar>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <LocationList
              cities={cities}
              onSelectLocation={this.handleSelectionLocation} />
          </Col>
          <Col xs={12} md={6}>
            <div className="details"></div>
          </Col>
        </Row>
        <Row></Row>
      </Grid>

    );
  }
}

export default App;
