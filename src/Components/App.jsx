import React from "react";
import { Counter } from "../features/counter/Counter";
import "./App.css";
import Header from "./Header.jsx";
import Sidebar from "./Sidebar.jsx";
function App() {
  return (
    <div className="App">
      <Header />

      {/* {App Body} */}

      {/* {sidebar/left} */}
      <div className="app__body">
        <Sidebar />
        {/* {Feed} */}
        {/* {widgets/right} */}
      </div>
    </div>
  );
}

export default App;
