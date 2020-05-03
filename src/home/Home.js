import React, { Component } from 'react';
import './Home.css';
import DefaultBlogs from "../blogs/DefaultBlogs";
import UserBlogs from "../blogs/UserBlogs";
import {NavLink} from "react-router-dom";
import Moment from "react-moment";
import Forecast from '../packages/react-forecast';

class Home extends Component {
    render() {
        return (
            <div className="home-container">

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

                <div className='iframeContainer'>
                    <Forecast latitude={34.05} longitude={118.25} name='Los Angeles' />
                </div>

                { this.props.authenticated ? (
                    <div className="blog-container">
                        <UserBlogs/>
                        <NavLink to="/profile"></NavLink>
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
