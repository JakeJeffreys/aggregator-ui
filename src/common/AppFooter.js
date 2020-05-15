import React, { Component } from 'react';
import './AppFooter.css';

class AppFooter extends Component {
    render() {
        return (
            <footer className="app-footer">
                <div className="left">

                </div>
                <div className="right">
                    Built by
                    <a href="https://github.com/JakeJeffreys"> @jakejeffreys</a>
                </div>
            </footer>
        )
    }
}

export default AppFooter;