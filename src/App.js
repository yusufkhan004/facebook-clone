import React from "react";
import "./App.css";
import Feed from "./Feed";
import Header from "./Header";
import Sidebar from "./Sidebar";
import ChatSection from "./ChatSection";

const App = () => {
  return (
    // BEM (block element modifier methodology) naming convention
    <div className="App">
     <Header />

    <div className="app__body">
      <Sidebar />
      <Feed />
      <ChatSection />
      {/* Sidebar */}
     {/* Feed */}
     {/* ChatSection */}
    </div>
     

    </div>
  );
}

export default App;
