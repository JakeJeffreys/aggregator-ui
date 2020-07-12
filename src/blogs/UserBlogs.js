import React, {Component} from 'react';
import './Blogs.css';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import CategoryObject from "./CategoryObject";
import {getCurrentUser} from "../util/APIUtils";
import LoadingIndicator from "../common/LoadingIndicator";
import {Responsive, WidthProvider} from 'react-grid-layout';
import {NavLink} from 'react-router-dom';

const ResponsiveGridLayout = WidthProvider(Responsive);

const defaultLayouts = {
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

let originalLayouts = {};

class UserBlogs extends Component {

    constructor(props) {
        super(props);
        originalLayouts = getFromLS("layouts") || {...defaultLayouts};
        this.state = {
            categoryValues: [],
            loading: false,
            layouts: JSON.parse(JSON.stringify(originalLayouts))
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
                        {name: "finance", status: response.finance},
                        {name: "business", status: response.business},
                        {name: "technology", status: response.technology},
                        {name: "travel", status: response.travel},
                        {name: "food", status: response.food},
                        {name: "health", status: response.health},
                        {name: "DIY", status: response.diy},
                        {name: "fashion", status: response.fashion},
                        {name: "sports", status: response.sports}
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

    onLayoutChange(layout, layouts) {
        saveToLS("layouts", layouts);
        this.setState({ layouts });
    }

    resetLayout() {
        this.setState({ layouts: {...defaultLayouts} });
    }

    render() {
        if(this.state.loading) {
            return <LoadingIndicator />
        }

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
                            <NavLink to="/profile" className='link-text'>Go to Profile!</NavLink>
                        </div>
                    </div>
                ): (
                    <ResponsiveGridLayout className="layout"
                             breakpoints={{lg: 1020, md:670, sm: 0}}
                             cols={{lg: 3, md: 2, sm: 1}}
                             margin={[30, 0]}
                             rowHeight={305}
                             isResizable={false}
                             compactType={null}
                             layouts={this.state.layouts}
                             onLayoutChange={(layout, layouts) =>
                               this.onLayoutChange(layout, layouts)
                             }>
                        {categoryObjects}
                    </ResponsiveGridLayout>
                )}
            </div>
        );
    }
}

function getFromLS(key) {
  let ls = {};
  if (global.localStorage) {
    try {
      ls = JSON.parse(global.localStorage.getItem("rgl-8")) || {};
    } catch (e) {
      /*Ignore*/
    }
  }
  return ls[key];
}

function saveToLS(key, value) {
  if (global.localStorage) {
    global.localStorage.setItem(
      "rgl-8",
      JSON.stringify({
        [key]: value
      })
    );
  }
}

export default UserBlogs;