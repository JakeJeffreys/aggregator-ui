import React, { Component } from 'react';
import '../home/Home.css';
import './Weather.css';
import Forecast from '../packages/react-forecast';
import { geolocated } from "react-geolocated";

class Weather extends Component {

  render() {
        return (
                !this.props.isGeolocationAvailable ? (
                    <div className="weatherLoading">Your browser does not support Geolocation</div>
                ) : !this.props.isGeolocationEnabled ? (
                    <div>
                        <div className="weatherLoading">Geolocation is not enabled</div>
                    </div>
                ) : this.props.coords ? (
                    <div className="Weather">
                        <div className='iframeContainer'>
                            <Forecast latitude={this.props.coords.latitude} longitude={this.props.coords.longitude} name='Weather'/>
                        </div>
                    </div>
                ) : (
                    <div className="weatherLoading"></div>
                )
        )
    }

}

export default geolocated({
    positionOptions: {
        enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
})(Weather);
