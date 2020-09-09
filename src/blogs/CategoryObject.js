import React, {Component} from 'react';
import './Blogs.css';
import {getBlogsByCategory} from '../util/APIUtils';
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

    componentWillUnmount() {
        // fix Warning: Can't perform a React state update on an unmounted component
        this.setState = (state,callback)=>{
            return;
        };
    }

    render() {

        const blogs = this.state.blogs.map((blog, index) =>
            <div key={index} className="blogBox">

                <div>
                    <a id="ArticleName" target="_blank" rel="noopener noreferrer" href={blog.link1}> {blog.article1} </a>
                </div>

                <div className="blogInfo">
                    <div id="Date">
                        <Moment format="YYYY-MM-DD">{blog.date1}</Moment>
                    </div>
                    <div id="Spacer">|</div>
                    <div className="siteInfo">
                        <a id="SiteName" target="_blank" rel="noopener noreferrer" href={blog.url}> {blog.website} </a>
                    </div>
                </div>

            </div>
        );

        return (
        <div>
            <div id="CategoryName">{this.props.category[0].toUpperCase() + this.props.category.slice(1)}</div>
            <div className="blogsRow">
                <div>{blogs}</div>
            </div>
        </div>
        );
    }
}

export default CategoryObject;