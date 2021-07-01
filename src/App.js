import React from "react";
import "./App.css";
import Feed from "./Feed";
import Header from "./Header";
import Sidebar from "./Sidebar";
import ChatSection from "./ChatSection";
import Login from "./Login";
import { useStateValue } from "./StateProvider";

const App = () => {
  
  const [{user}, dispatch] = useStateValue();

  return (
    // BEM (block element modifier methodology) naming convention
    <div className="App">

    {!user ? (
      <Login />
    ):(
      <>
      <Header />

      <div className="app__body">
        <Sidebar />
        <Feed />
        <ChatSection />
      </div>
    </>
    )
    }

    </div>
  );
}

export default App;
