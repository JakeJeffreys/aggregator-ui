import React, {Component} from 'react';
import './Blogs.css';
import BlogRow from "./BlogRow";

class UserBlogs extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tech: false,
            finance: false,
            travel: false,
            food: false
        };
    }

    render() {
        // TODO: Implemement logic for showing/hiding rows
        // TODO: Clean up look up rows

        return (
            <div className="App">
                <div className="blogsContainer">
                    <BlogRow category={'Tech'}/>
                </div>
                <div className="blogsContainer">
                    <BlogRow category={'Finance'}/>
                </div>
                <div className="blogsContainer">
                    <BlogRow category={'Travel'}/>
                </div>
                <div className="blogsContainer">
                    <BlogRow category={'Food'}/>
                </div>
            </div>
        );
    }
}

export default UserBlogs;