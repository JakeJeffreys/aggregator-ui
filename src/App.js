import React from 'react';
import './styles/App.css';
import Blogs from "./components/Blogs";
import Tabs from "./components/Tabs";

function App() {
  return (
      <div className="App">
        <header className="Header">
          Blog Base
        </header>
          <Tabs>
              {/*<div label="Home">*/}
              {/*    Homepage!*/}
              {/*</div>*/}
              <div label="Finance">
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
