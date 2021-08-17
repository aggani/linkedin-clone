import React from "react";
import "./App.css";
import Header from "./Header.jsx";
import Sidebar from "./Sidebar.jsx";
import Feed from "./Feed";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";

function App() {
  const user = useSelector;

  return (
    <div className="app">
      <Header />
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Sidebar />
          <Feed />
          {/* {widgets/right} */}
        </div>
      )}
    </div>
  );
}

export default App;
