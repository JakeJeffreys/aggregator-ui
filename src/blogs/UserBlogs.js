import React, {Component} from 'react';
import './Blogs.css';
import BlogRow from "./BlogRow";
import {getCurrentUser} from "../util/APIUtils";
import LoadingIndicator from "../common/LoadingIndicator";

class UserBlogs extends Component {

    constructor(props) {
        super(props);
        this.state = {
            finance: false,
            business: false,
            technology: false,
            travel: false,
            food: false,
            health: false,
            fashion: false,
            diy: false,
            sports: false,
        };
    }

    loadUserData() {
        this.setState({
            loading: true
        });
        getCurrentUser()
            .then(response => {
                this.setState({
                    finance: response.finance,
                    business: response.business,
                    technology: response.technology,
                    travel: response.travel,
                    food: response.food,
                    health: response.health,
                    diy: response.diy,
                    fashion: response.fashion,
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
                    <BlogRow category={'Finance'} show={this.state.finance}/>
                </div>
                <div className="blogsContainer">
                    <BlogRow category={'Business'} show={this.state.business}/>
                </div>
                <div className="blogsContainer">
                    <BlogRow category={'Technology'} show={this.state.technology}/>
                </div>
                <div className="blogsContainer">
                    <BlogRow category={'Travel'} show={this.state.travel}/>
                </div>
                <div className="blogsContainer">
                    <BlogRow category={'Food'} show={this.state.food}/>
                </div>
                <div className="blogsContainer">
                    <BlogRow category={'Health'} show={this.state.health}/>
                </div>
                <div className="blogsContainer">
                    <BlogRow category={'DIY'} show={this.state.diy}/>
                </div>
                <div className="blogsContainer">
                    <BlogRow category={'Fashion'} show={this.state.fashion}/>
                </div>
                <div className="blogsContainer">
                    <BlogRow category={'Sports'} show={this.state.sports}/>
                </div>

            </div>
        );
    }
}

export default UserBlogs;