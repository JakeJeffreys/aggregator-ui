import React, {Component} from 'react';
import './Blogs.css';
import {getBlogsByCategory} from '../util/APIUtils';
//import LoadingIndicator from "../common/LoadingIndicator";
import Moment from 'react-moment';


class CategoryObject extends Component {

    constructor(props) {
        super(props);
        this.state = {
            category: this.props.category,
            blogs: []
        }
    }

    loadBlogs() {
        getBlogsByCategory(this.state.category)
            .then( response => {
                this.setState({
                    blogs: response
                })
            }).catch(error => {
                console.error(error);
        });
    }

    componentDidMount() {
        this.loadBlogs();
    }

    render() {

        const blogs = this.state.blogs.map((blog, index) =>
            <div key={index} className="blogBox">

                <div className="siteInfo">
                    <div id="SiteName">{blog.website}</div>
                </div>

                <div className="blogInfo">
                    <div id="Date">
                        <Moment format="YYYY-MM-DD">{blog.date1}</Moment>
                    </div>
                    <div id="ArticleName">
                        <a href={blog.link1}> {blog.article1} </a>
                    </div>
                </div>

            </div>
        );

        return (
        <div>
            <div id="CategoryName">{this.props.category}</div>
            <div className="blogsRow">
                <div>{blogs}</div>
            </div>
        </div>
        );
    }
}

export default CategoryObject;