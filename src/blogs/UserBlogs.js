import React, {Component} from 'react';
import './Blogs.css';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import CategoryObject from "./CategoryObject";
import {getCurrentUser} from "../util/APIUtils";
import LoadingIndicator from "../common/LoadingIndicator";
import {Responsive, WidthProvider} from 'react-grid-layout';
import {Link, NavLink} from 'react-router-dom';

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

        const layouts = {
            lg: [
              {i: '0', x: 0, y: 0, w: 1, h: 1},
              {i: '1', x: 2, y: 0, w: 1, h: 1},
              {i: '2', x: 1, y: 0, w: 1, h: 1},
              {i: '3', x: 0, y: 1, w: 1, h: 1},
              {i: '4', x: 2, y: 1, w: 1, h: 1},
              {i: '5', x: 1, y: 1, w: 1, h: 1},
              {i: '6', x: 0, y: 2, w: 1, h: 1},
              {i: '7', x: 2, y: 2, w: 1, h: 1},
              {i: '8', x: 1, y: 2, w: 1, h: 1}
            ],
            md: [
              {i: '0', x: 0, y: 0, w: 1, h: 1},
              {i: '1', x: 1, y: 0, w: 1, h: 1},
              {i: '2', x: 0, y: 1, w: 1, h: 1},
              {i: '3', x: 1, y: 1, w: 1, h: 1},
              {i: '4', x: 0, y: 2, w: 1, h: 1},
              {i: '5', x: 1, y: 2, w: 1, h: 1},
              {i: '6', x: 0, y: 3, w: 1, h: 1},
              {i: '7', x: 1, y: 3, w: 1, h: 1},
              {i: '8', x: 0, y: 4, w: 1, h: 1}
            ],
            sm: [
              {i: '0', x: 0, y: 0, w: 1, h: 1},
              {i: '1', x: 0, y: 1, w: 1, h: 1},
              {i: '2', x: 0, y: 2, w: 1, h: 1},
              {i: '3', x: 0, y: 3, w: 1, h: 1},
              {i: '4', x: 0, y: 4, w: 1, h: 1},
              {i: '5', x: 0, y: 5, w: 1, h: 1},
              {i: '6', x: 0, y: 6, w: 1, h: 1},
              {i: '7', x: 0, y: 7, w: 1, h: 1},
              {i: '8', x: 0, y: 8, w: 1, h: 1}
            ]
        };

        const categoriesToShow = this.state.categoryValues.filter((category, index) => category.status );

        const categoryObjects = categoriesToShow.map((category, index) =>
            <div key={index} className="blogsContainer">
                <CategoryObject category={category.name}/>
            </div>
        );


        return (
            <div>
                { categoryObjects.length === 0  ? (
                    <div className='no-selection-message'>
                        <div>You don't have any blog categories selected. Check out your profile to browse our category options!</div>
                        <div className='profile-link'>
                            <Link to="/profile" className='link-text'>Go to Profile!</Link>
                        </div>
                    </div>
                ): (
                    <ResponsiveGridLayout className="layout" layouts={layouts}
                             breakpoints={{lg: 1000, md:650, sm: 0}}
                             cols={{lg: 3, md: 2, sm: 1}}
                             margin={[30, 0]}
                             rowHeight={370}
                             isResizable={false}
                             compactType={null}>
                        {categoryObjects}
                    </ResponsiveGridLayout>
                )}
            </div>
        );
    }
}

export default UserBlogs;