import React, {Component} from 'react';
import './Blogs.css';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import CategoryObject from './CategoryObject';
import {Responsive, WidthProvider} from 'react-grid-layout';

const ResponsiveGridLayout = WidthProvider(Responsive);

class Blogs extends Component {

    constructor(props) {
        super(props);
        this.state = {
            categoryValues: [
                "finance", "business", "technology",
                "DIY", "food", "health"
            ]
        };
    }

    render() {

        const categoryObjects = this.state.categoryValues.map((category, index) =>
            <div key={index} className="blogsContainer">
                <CategoryObject category={category}/>
            </div>
        );

        const layouts = {
            lg: [
              {i: '0', x: 0, y: 0, w: 1, h: 1, static: true},
              {i: '1', x: 1, y: 0, w: 1, h: 1, static: true},
              {i: '2', x: 2, y: 0, w: 1, h: 1, static: true},
              {i: '3', x: 0, y: 1, w: 1, h: 1, static: true},
              {i: '4', x: 1, y: 1, w: 1, h: 1, static: true},
              {i: '5', x: 2, y: 1, w: 1, h: 1, static: true}
            ],
            md: [
              {i: '0', x: 0, y: 0, w: 1, h: 1, static: true},
              {i: '1', x: 1, y: 0, w: 1, h: 1, static: true},
              {i: '2', x: 0, y: 1, w: 1, h: 1, static: true},
              {i: '3', x: 1, y: 1, w: 1, h: 1, static: true},
              {i: '4', x: 0, y: 2, w: 1, h: 1, static: true},
              {i: '5', x: 1, y: 2, w: 1, h: 1, static: true}
            ],
            sm: [
              {i: '0', x: 0, y: 0, w: 1, h: 1, static: true},
              {i: '1', x: 0, y: 1, w: 1, h: 1, static: true},
              {i: '2', x: 0, y: 2, w: 1, h: 1, static: true},
              {i: '3', x: 0, y: 3, w: 1, h: 1, static: true},
              {i: '4', x: 0, y: 4, w: 1, h: 1, static: true},
              {i: '5', x: 0, y: 5, w: 1, h: 1, static: true}
            ]
        };

        return(
            <ResponsiveGridLayout className="layout" layouts={layouts}
                     breakpoints={{lg: 1000, md:650, sm: 0}}
                     cols={{lg: 3, md: 2, sm: 1}}
                     margin={[30, 0]}
                     rowHeight={305}>
                {categoryObjects}
            </ResponsiveGridLayout>
        );
    }
}

export default Blogs;