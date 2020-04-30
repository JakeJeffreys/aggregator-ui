import React, {Component} from 'react';
import './Blogs.css';
import CategoryObject from "./CategoryObject";
import {getCurrentUser} from "../util/APIUtils";
import LoadingIndicator from "../common/LoadingIndicator";
import {Responsive, WidthProvider} from 'react-grid-layout';

const ResponsiveGridLayout = WidthProvider(Responsive);

class UserBlogs extends Component {

    constructor(props) {
        super(props);
        this.state = {
            categoryValues: [],
            loading: false
        };
    }

    loadUserData() {
        this.setState({
            loading: true
        });
        getCurrentUser()
            .then(response => {
                this.setState({
                    categoryValues: [
                        {name: "Finance", status: response.finance},
                        {name: "Business", status: response.business},
                        {name: "Technology", status: response.technology},
                        {name: "Travel", status: response.travel},
                        {name: "Food", status: response.food},
                        {name: "Health", status: response.health},
                        {name: "DIY", status: response.diy},
                        {name: "Fashion", status: response.fashion},
                        {name: "Sports", status: response.sports}
                    ],
                    loading: false
                });
            }).catch(error => {
                this.setState({
                    loading: false
                });
                console.error(error)
            });
    }

    componentDidMount() {
        this.loadUserData();
    }

    render() {
        if(this.state.loading) {
            return <LoadingIndicator />
        }

        const layouts = {main: [
          {i: '0', x: 0, y: 0, w: 1, h: 2.5},
          {i: '1', x: 1, y: 0, w: 1, h: 2.5},
          {i: '2', x: 2, y: 0, w: 1, h: 2.5},
          {i: '3', x: 0, y: 1, w: 1, h: 2.5},
          {i: '4', x: 1, y: 1, w: 1, h: 2.5},
          {i: '5', x: 2, y: 1, w: 1, h: 2.5},
          {i: '6', x: 0, y: 2, w: 1, h: 2.5},
          {i: '7', x: 1, y: 2, w: 1, h: 2.5},
          {i: '8', x: 2, y: 2, w: 1, h: 2.5},
        ]};

        const categoriesToShow = this.state.categoryValues.filter((category, index) => category.status );
        const categoryObjects = categoriesToShow.map((category, index) =>
            <div key={index} className="blogsContainer">
                <CategoryObject category={category.name}/>
            </div>
        );

        return (
            <ResponsiveGridLayout className="layout" layouts={layouts}
                     breakpoints={{main: 1200}}
                     cols={{main: 3}}>
                {categoryObjects}
            </ResponsiveGridLayout>
        );
    }
}

export default UserBlogs;