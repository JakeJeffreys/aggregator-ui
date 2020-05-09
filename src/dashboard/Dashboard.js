import React, { Component } from 'react';
import '../home/Home.css';
import Moment from "react-moment";
import Weather from "./Weather";

class Dashboard extends Component {

    render() {
        let dashboard;
        if (this.props.dashboardEnabled) {
            dashboard =
                 <div className="dashboard">
                    <div className="DateTime">
                        <div id="center">
                          <div className="Time" id="time">
                            <Moment interval={60000} format="h:mm A"></Moment>
                          </div>
                          <div className="Date" id="date">
                            <Moment format="dddd, MMMM Do"></Moment>
                          </div>
                        </div>
                    </div>
                    <div className="verticalLine"/>
                    <Weather/>
                </div>
        } else {
            dashboard = '';
        }

        return (
            <div className="dashboard-container">
                {dashboard}
            </div>
        )
    }
}

export default Dashboard;
