import React, {Component} from 'react';
import './Blogs.css';
import { getBlogs } from '../util/APIUtils';

// import * as myConstClass from '../constants/index';
// const URL = myConstClass.API_BASE_URL;

class Blogs extends Component {

    constructor(props) {
        super(props);
        this.state = {
            authenticated: false,
            blogs: [],
            loading: false
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
        this.setState({
            loading: true
        })

        getBlogs()
            .then( response => {
                this.setState({
                    blogs: response,
                    authenticated: true,
                    loading: false
                })
            }).catch(error => {
                this.setState({
                    loading: false
                });
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

export default Blogs;