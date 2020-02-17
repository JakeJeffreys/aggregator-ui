import React, { Component } from 'react';
import './Home.css';
import Blogs from "../blogs/Blogs";
import UserBlogs from "../blogs/UserBlogs";
import {NavLink} from "react-router-dom";


class Home extends Component {
    render() {
        return (
            <div className="home-container">
                { this.props.authenticated ? (
                    <div className="home-container">
                        <UserBlogs/>
                        <NavLink to="/profile">Customize your dashboard!</NavLink>
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
