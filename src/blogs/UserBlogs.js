import React, {Component} from 'react';
import './Blogs.css';
import BlogRow from "./BlogRow";
import {getCurrentUser} from "../util/APIUtils";
import LoadingIndicator from "../common/LoadingIndicator";

class UserBlogs extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tech: false,
            finance: false,
            travel: false,
            food: false,
            loading: false
        };
    }

    loadUserData() {
        this.setState({
            loading: true
        });
        getCurrentUser()
            .then(response => {
                this.setState({
                    tech: response.tech,
                    finance: response.finance,
                    travel: response.travel,
                    food: response.food,
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
        if(this.state.loading) {
            return <LoadingIndicator />
        }

        return (
            <div className="App">
                <div className="blogsContainer">
                    <BlogRow category={'Tech'} show={this.state.tech}/>
                </div>
                <div className="blogsContainer">
                    <BlogRow category={'Finance'} show={this.state.finance}/>
                </div>
                <div className="blogsContainer">
                    <BlogRow category={'Travel'} show={this.state.travel}/>
                </div>
                <div className="blogsContainer">
                    <BlogRow category={'Food'} show={this.state.food}/>
                </div>
            </div>
        );
    }
}

export default UserBlogs;