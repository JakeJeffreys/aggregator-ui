import React from 'react';
import './styles/App.css';
import Blogs from "./components/Blogs";
import Tabs from "./components/Tabs";

function App() {
  return (
      <div className="App">
        <header className="Header">
          <h1 className="App-title">Blog Crawler</h1>
        </header>
          <Tabs>
              {/*<div label="Home">*/}
              {/*    Homepage!*/}
              {/*</div>*/}
              <div label="Blogs">
                    <Blogs/>
              </div>
              <div label="Tech">
                  Nothing to see here, this tab is <em>extinct</em>!
              </div>
          </Tabs>
      </div>
  );
}

export default App;
