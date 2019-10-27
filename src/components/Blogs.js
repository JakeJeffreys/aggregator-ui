import React, {Component} from 'react';
import '../styles/Blogs.css';

class Blogs extends Component {

    constructor(props) {
        super(props);
        this.state = {blogs: []};
    }

    componentDidMount() {
        fetch('http://localhost:8080/api/blogs')
        .then((response) => {
            return response.json();
        })
        .then((responseData) => {
            this.setState({blogs: responseData})
        })
        .catch(err => console.error(err))
    }

    render() {
        const blogColumn1 = this.state.blogs.slice(0,this.state.blogs.length/2).map((blog, index) =>
            <div key={index} className="blogBox">

                <div className="blogQuarter">
                    <div id="SiteName">{blog.website}</div>
                    <div id="Author">{blog.author}</div>
                </div>

                <div className="blogQuarter">
                    <div id="Date">{blog.date1} </div>
                    <div id="ArticleName">
                        <a href={blog.link1}> {blog.article1} </a>
                    </div>
                </div>

                <div className="blogQuarter">
                    <div id="Date">{blog.date2} </div>
                    <div id="ArticleName">
                        <a href={blog.link2}> {blog.article2} </a>
                    </div>
                </div>

                <div className="blogQuarter">
                    <div id="Date">{blog.date3} </div>
                    <div id="ArticleName">
                        <a href={blog.link3}> {blog.article3} </a>
                    </div>
                </div>

            </div>
        );

        const blogColumn2 = this.state.blogs.slice(this.state.blogs.length/2, this.state.blogs.length).map((blog, index) =>
            <div key={index} className="blogBox">

                <div className="blogQuarter">
                    <div id="SiteName">{blog.website}</div>
                    <div id="Author">{blog.author}</div>
                </div>

                <div className="blogQuarter">
                    <div id="Date">{blog.date1} </div>
                    <div id="ArticleName">
                        <a href={blog.link1}> {blog.article1} </a>
                    </div>
                </div>

                <div className="blogQuarter">
                    <div id="Date">{blog.date2} </div>
                    <div id="ArticleName">
                        <a href={blog.link2}> {blog.article2} </a>
                    </div>
                </div>

                <div className="blogQuarter">
                    <div id="Date">{blog.date3} </div>
                    <div id="ArticleName">
                        <a href={blog.link3}> {blog.article3} </a>
                    </div>
                </div>

            </div>
        );

        return (
            <div className="App">
                <div className="container">
                    <div className="column">{blogColumn1}</div>
                    <div className="column">{blogColumn2}</div>
                </div>
            </div>
        );
    }
}

export default Blogs;