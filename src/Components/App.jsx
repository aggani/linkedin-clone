import React from "react";
import { Counter } from "../features/counter/Counter";
import "./App.css";
import Header from "./Header.jsx";
import Sidebar from "./Sidebar.jsx";
import Feed from "./Feed";
import { useSelector } from "react-redux";

function App() {

  const user = useSelector

  return (
    <div className="app">
      <Header />

      {/* {App Body} */}

      {/* {sidebar/left} */}
      <div className="app__body">
        <Sidebar />
        <Feed />
        {/* {widgets/right} */}
      </div>
    </div>
  );
}

export default App;
