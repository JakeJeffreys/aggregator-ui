import React, {Component} from 'react';
import './Blogs.css';
import { getUserBlogs, getCurrentUser } from "../util/APIUtils";

// import * as myConstClass from '../constants/index';
// const URL = myConstClass.API_BASE_URL;

class UserBlogs extends Component {

    constructor(props) {
        super(props);
        this.state = {
            blogIds: {
                blog1: null,
                blog2: null,
                blog3: null,
                blog4: null,
                blog5: null,
                blog6: null
            },
            blogs: []
        };

        this.loadBlogs = this.loadBlogs.bind(this);
    }

    // componentDidMount() {
    //     fetch(URL + '/api/blogs' + this.props.category, )
    //     .then((response) => {
    //         return response.json();
    //     })
    //     .then((responseData) => {
    //         this.setState({blogs: responseData})
    //     })
    //     .catch(err => console.error(err))
    // }

    loadBlogs() {

        getCurrentUser()
            .then(response => {
                this.setState({
                    blogIds: {
                        blog1: response.blog1,
                        blog2: response.blog2,
                        blog3: response.blog3,
                        blog4: response.blog4,
                        blog5: response.blog5,
                        blog6: response.blog6
                    }
                });
            }).catch(error => {
                console.error(error)
            });

        const userBlogsRequest = Object.assign({}, this.state.blogIds)

        getUserBlogs(userBlogsRequest)
            .then( response => {
                this.setState({
                    blogs: response,
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
            <div className="App">
                <div className="blogsContainer">
                    <div>{blogs}</div>
                </div>
            </div>
        );
    }
}

export default UserBlogs;