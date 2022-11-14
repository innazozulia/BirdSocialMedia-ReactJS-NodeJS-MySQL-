import React from "react";
import { Link } from "react-router-dom";
import HouseOutlinedIcon from "@mui/icons-material/HouseOutlined";
import ModeNightOutlinedIcon from "@mui/icons-material/ModeNightOutlined";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import LightModeIcon from "@mui/icons-material/LightMode";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { FaKiwiBird } from "react-icons/fa";
import { DarkModeContext } from "../../context/darkModeContext";
import { AuthContext } from "../../context/authContext";

import "./navbar.scss";

const Navbar = () => {
  const { toggle, darkMode } = React.useContext(DarkModeContext);
  const { currentUser } = React.useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="left">
        <Link
          to="/"
          style={{ textDecoration: "none" }}>
          <span>
            BirdSocial <FaKiwiBird />
          </span>
        </Link>
        <HouseOutlinedIcon className="icon" />
        {!darkMode ? (
          <ModeNightOutlinedIcon
            onClick={toggle}
            className="icon"
          />
        ) : (
          <LightModeIcon
            onClick={toggle}
            className="icon"
          />
        )}
        <AppsOutlinedIcon className="icon" />
        <div className="search">
          <SearchOutlinedIcon />
          <input
            type="text"
            placeholder="Search..."
          />
        </div>
      </div>
      <div className="right">
        <PersonOutlinedIcon className="icon" />
        <EmailOutlinedIcon className="icon" />
        <NotificationsOutlinedIcon className="icon" />
        <div className="user">
          {/* <img
            src={"/upload/" + currentUser.profilePicture}
            alt=""
          /> */}
          <img
            src="https://images.unsplash.com/photo-1668355127376-91b48ed7ee7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2795&q=80"
            alt=""
          />
          <span>{currentUser.name}</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
