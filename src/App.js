import React from "react";
import "./App.css";
import Feed from "./components/Feed";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import ChatSection from "./components/ChatSection";
import Login from "./components/Login";
import { useStateValue } from "./components/StateProvider";

const App = () => {
  
  const [{user}, dispatch] = useStateValue();

  return (
    // BEM (block element modifier methodology) naming convention
    <div className="App">

    {!user ? (
      <Login />
    ):(
      <>
      <div className="body">
      <Header />

      <div className="app__body">
        <Sidebar />
        <Feed />
        <ChatSection />
      </div>
      </div>
    </>
    )
    }

    </div>
  );
}

export default App;

//np