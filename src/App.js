import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import RecommendedVideos from "./RecommendedVideos";
import "./App.css";

function App() {
  return (
    //BEM class naming convention
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route path="/search">
            <h1>Search PAge</h1>
          </Route>
          <Route path="/">
            <div className="app__page">
              <Sidebar />
              <RecommendedVideos />
            </div>
          </Route>
        </Switch>
      </Router>
      {/* <Header />
      <div className="app__page">
        <Sidebar />
        <RecommendedVideos />
      </div> */}
    </div>
  );
}

export default App;
