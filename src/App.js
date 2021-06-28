import React from "react";
import "./App.css";
import Feed from "./Feed";
import Header from "./Header";
import Sidebar from "./Sidebar";

const App = () => {
  return (
    // BEM (block element modifier methodology) naming convention
    <div className="App">
     <Header />

    <div className="app__body">
      <Sidebar />
      <Feed />
      {/* Sidebar */}
     {/* Feed */}
     {/* Widgets */}
    </div>
     

    </div>
  );
}

export default App;
