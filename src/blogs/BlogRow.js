import React, {Component} from 'react';
import './Blogs.css';
import {getBlogsByCategory} from '../util/APIUtils';
//import LoadingIndicator from "../common/LoadingIndicator";

class BlogRow extends Component {

    constructor(props) {
        super(props);
        console.log("PROPS", props);

        this.state = {
            category: this.props.category,
            blogs: []
        }
    }


    loadBlogs() {
        console.log("Loading blogs");

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
        // if prop is true then show?
        if(!this.props.show) {
            return (null);
        }

        const blogs = this.state.blogs.map((blog, index) =>
            <div key={index} className="blogBox">

                <div className="siteInfo">
                    <div id="SiteName">{blog.website}</div>
                    <div id="Author">{blog.author}</div>
                </div>

                <div className="blogInfo">
                    <div id="Date">{blog.date1} </div>
                    <div id="ArticleName">
                        <a href={blog.link1}> {blog.article1} </a>
                    </div>
                </div>

                <div className="blogInfo">
                    <div id="Date">{blog.date2} </div>
                    <div id="ArticleName">
                        <a href={blog.link2}> {blog.article2} </a>
                    </div>
                </div>

                <div className="blogInfo">
                    <div id="Date">{blog.date3} </div>
                    <div id="ArticleName">
                        <a href={blog.link3}> {blog.article3} </a>
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

export default BlogRow;