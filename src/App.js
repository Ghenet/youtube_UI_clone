import React from 'react';
import Header from './Header';
import './App.css';

function App() {
  return (
    //BEM class naming convention
    <div className="app">
      <Header />
      <p>
        {/* Header -> <Header/> */}
        {/*Sidebar -> <Sidebar /> */}
        {/*RecommendedVideos <RecommendedVideos /> */}
      </p>

    </div>
  );
}

export default App;
