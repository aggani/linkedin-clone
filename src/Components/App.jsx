import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./Header.jsx";
import Sidebar from "./Sidebar.jsx";
import Feed from "./Feed";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../features/userSlice";
import Login from "./Login.jsx";
import { auth } from "../firebase";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // user is logged in
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.name,
            photoUrl: userAuth.photoURL,
          })
        );
      } else {
        // user is logged out
        dispatch(logout());
      }
    });
  }, []);

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
