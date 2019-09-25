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
        const tableRows = this.state.blogs.map((blog, index) =>
            <tr key={index}>
                <div id="SiteName">{blog.name}</div>
                <div id="ArticleName">
                    <a href={blog.link}> {blog.article} </a>
                </div>
                <div id="Date">{blog.date} </div>
            </tr>
        );
        return (
            <div className="App">
                <table>
                    <tbody>{tableRows}</tbody>
                </table>
            </div>
        );
    }
}

export default Blogs;