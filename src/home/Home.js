import React, { Component } from 'react';
import './Home.css';
import DefaultBlogs from "../blogs/DefaultBlogs";
import UserBlogs from "../blogs/UserBlogs";
import {NavLink} from "react-router-dom";
import Moment from "react-moment";
import Forecast from '../packages/react-forecast';
import {getCurrentUser} from "../util/APIUtils";

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dashboard: false,
            loading: false,

        };
    }

    loadUserData() {
        this.setState({
            loading: true
        });
        getCurrentUser()
            .then(response => {
                this.setState({
                    dashboard: response.dashboardEnabled,
                    loading: false
                });
            }).catch(error => {
                this.setState({
                    loading: false
                });
                console.error(error)
            });
    }

    componentDidMount() {
        this.loadUserData();
    }
    render() {


        let dashboard;
        if(this.state.dashboard) {
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
                    <div className="Weather">
                        <div className='iframeContainer'>
                            <Forecast latitude={34.05} longitude={118.25} name='Los Angeles' />
                        </div>
                    </div>
                </div>
        }

        console.log(this.state.dashboard);
        console.log(dashboard);

        return (
            <div className="home-container">

                { this.props.authenticated ? (

                    <div className="authContents">

                        {dashboard}

                        <div className="blog-container">
                            <UserBlogs/>
                        </div>
                    </div>

                ): (
                    <div className="blog-container">
                        <h2>Welcome to BlogBase! A great way to discover new blog genres and keep up-to-date on your favorites.</h2>
                        <h2>
                            <NavLink to="/signup" className='link-text'>Sign Up </NavLink>
                            or
                            <NavLink to="/login" className='link-text'> Login </NavLink>
                            to customize your dashboard!
                        </h2>
                        <DefaultBlogs/>
                    </div>
                )}
            </div>
        )
    }
}

export default Home;
