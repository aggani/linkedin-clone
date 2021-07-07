import React from "react";
import "./Sidebar.css";
import { Avatar } from "@material-ui/core";

function Sidebar() {

    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    );

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src="https://images.unsplash.com/photo-1483354483454-4cd359948304?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGlua2VkaW4lMjBiYWNrZ3JvdW5kfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" />
        <Avatar className="sidebar__avatar" />
        <h2>Anirudh Aggarwal</h2>
        <h4>anirudhaggarwal706@gmail.com</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">2,344</p>
        </div>
        <div className="sidebar__stat">
          <p>views on post</p>
          <p className="sidebar__statNumber">2,233</p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>

    {recentItem('reactjs')}
    {recentItem('web developer')}
    {recentItem('engineering')}
    {recentItem('computer science')}
      </div>
    </div>
  );
}

export default Sidebar;
