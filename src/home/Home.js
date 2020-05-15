import React, { Component } from 'react';
import './Home.css';
import DefaultBlogs from "../blogs/DefaultBlogs";
import UserBlogs from "../blogs/UserBlogs";
import Dashboard from "../dashboard/Dashboard";
import {NavLink} from "react-router-dom";
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

        return (
            <div className="home-container">

                { this.props.authenticated ? (

                    <div className="authContents">

                        <Dashboard dashboardEnabled={this.state.dashboard}/>

                        <div className="blog-container">
                            <UserBlogs/>
                        </div>
                    </div>

                ): (
                    <div className="blog-container">
                        <h2>Welcome to BlogBase! A great way to discover new blog genres and keep up-to-date on your favorites.</h2>
                        <h2 className="headerText">
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
