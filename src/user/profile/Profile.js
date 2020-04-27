import React, { Component } from 'react';
import './Profile.css';
import {getCurrentUser, setUserBlogPreferences} from "../../util/APIUtils";

class Profile extends Component {
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

        this.populateInitialState();

        this.populateInitialState = this.populateInitialState.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    populateInitialState() {
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
                    sports: response.sports
                });
            }).catch(error => {
            console.error(error)
        });
    }

    handleChange(key) {
        return function (e) {
            var state = {};
            state[key] = e.target.checked;
            this.setState(state);
        }.bind(this);
    }

    handleSubmit(event) {
        let userBlogsRequest = null;
        getCurrentUser()
            .then(response => {
                userBlogsRequest = Object.assign(response, this.state);
                setUserBlogPreferences(userBlogsRequest)
                    .then( response => {
                        console.log("Updated user preferences.");
                    })
                    .catch(error => {
                        console.error("Error", error);
                    });
            })
            .catch(error => {
                console.error(error)
            });
        event.preventDefault();
    }

    render() {

        return (
            <div className="profile-container">
                <div className="container">
                    <div className="profile-info">
                        <div className="profile-avatar">
                            { 
                                this.props.currentUser.imageUrl ? (
                                    <img src={this.props.currentUser.imageUrl} alt={this.props.currentUser.name}/>
                                ) : (
                                    <div className="text-avatar">
                                        <span>{this.props.currentUser.name && this.props.currentUser.name[0]}</span>
                                    </div>
                                )
                            }
                        </div>
                        <div className="profile-name">
                           <h2>{this.props.currentUser.name}</h2>
                           <p className="profile-email">{this.props.currentUser.email}</p>
                        </div>


                        <form onSubmit={this.handleSubmit}>
                            <label>
                                <input type="checkbox" checked={this.state.finance} onChange={this.handleChange('finance')} />
                                Finance <br />
                                <input type="checkbox" checked={this.state.business} onChange={this.handleChange('business')} />
                                Business <br />
                                <input type="checkbox" checked={this.state.technology} onChange={this.handleChange('technology')} />
                                Technology <br />
                                <input type="checkbox" checked={this.state.travel} onChange={this.handleChange('travel')} />
                                Travel <br />
                                <input type="checkbox" checked={this.state.food} onChange={this.handleChange('food')} />
                                Food <br />
                                <input type="checkbox" checked={this.state.health} onChange={this.handleChange('health')} />
                                Health <br />
                                <input type="checkbox" checked={this.state.diy} onChange={this.handleChange('diy')} />
                                DIY <br />
                                <input type="checkbox" checked={this.state.fashion} onChange={this.handleChange('fashion')} />
                                Fashion <br />
                                <input type="checkbox" checked={this.state.sports} onChange={this.handleChange('sports')} />
                                Sports <br />
                            </label>
                            <input type="submit" value="Submit" />
                        </form>
                    </div>
                </div>    
            </div>
        );
    }
}

export default Profile