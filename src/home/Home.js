import React, { Component } from 'react';
import './Home.css';
import Blogs from "../blogs/Blogs";
import UserBlogs from "../blogs/UserBlogs";
import {NavLink} from "react-router-dom";
import Moment from "react-moment";

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

                { this.props.authenticated ? (
                    <div className="home-container">
                        <UserBlogs/>
                        <NavLink to="/profile"></NavLink>
                    </div>

                ): (
                    <div className="home-container">
                        <h2>Welcome to BlogBase!</h2>
                        <Blogs/>
                        <p>Login to customize your dashboard!</p>
                    </div>
                )}
            </div>
        )
    }
}

export default Home;
