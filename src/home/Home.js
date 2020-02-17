import React, { Component } from 'react';
import './Home.css';
import Blogs from "../blogs/Blogs";
import UserBlogs from "../blogs/UserBlogs";
import {NavLink} from "react-router-dom";


class Home extends Component {
    render() {
        return (
            <div className="home-container">
                { this.props.authenticated ? (
                    <div className="home-container">
                        <UserBlogs/>
                        <NavLink to="/profile">Customize your dashboard!</NavLink>
                    </div>

                ): (
                    <div className="home-container">
                        <h2>Welcome to BlogBase!</h2>
                        <Blogs/>
                        <p>Login to customize your dashboard!</p>
                    </div>
                )}
            </div>
        )
    }
}

export default Home;

// import React from 'react';
// import './App.css';
// import Blogs from "../blogs/Blogs";
// import Tabs from "../tabs/Tabs";
//
// function App() {
//
//   return (
//       <div className="App">
//         <header className="Header">
//           Blog Base
//         </header>
//
//           <Tabs>
//               <div label="Finance">
//                     <Blogs category="Finance"/>
//               </div>
//               <div label="Tech">
//                   <Blogs category="Tech"/>
//               </div>
//               <div label="Health">
//                   <Blogs category="Health"/>
//               </div>
//               <div label="Food">
//                   <Blogs category="Food"/>
//               </div>
//               <div label="Travel">
//                   <Blogs category="Travel"/>
//               </div>
//               <div label="Science">
//                   <Blogs category="Science"/>
//               </div>
//           </Tabs>
//       </div>
//   );
// }
//
// export default App;
