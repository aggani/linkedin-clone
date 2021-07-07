import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HeaderOption from "./HeaderOption";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://www.mareauxoiseaux.fr/wp-content/uploads/2019/04/logo-linkedin.png"
          alt=""
        />
      </div>
      <div className="header__search">
        <SearchIcon />
        <input type="text" />
      </div>
      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption Icon={ChatIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsIcon} title="Notifications" />
        <HeaderOption
          avatar="https://media-exp1.licdn.com/dms/image/C4E03AQFrQlEb_nXCEQ/profile-displayphoto-shrink_200_200/0/1593175958410?e=1629936000&v=beta&t=rwYUH5adYpivwTssaM5_vXw1QjGSY9n4__js6hkC7cU"
          title="me"
        />
      </div>
    </div>
  );
}

export default Header;
