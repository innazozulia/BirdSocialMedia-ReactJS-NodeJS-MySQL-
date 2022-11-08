import React from "react";
import HouseOutlinedIcon from "@mui/icons-material/HouseOutlined";
import ModeNightOutlinedIcon from "@mui/icons-material/ModeNightOutlined";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { FaKiwiBird } from "react-icons/fa";
import { Link } from "react-router-dom";

import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>
            BirdSocial <FaKiwiBird />
          </span>
        </Link>
        <HouseOutlinedIcon />
        <ModeNightOutlinedIcon />
        <AppsOutlinedIcon />
        <div className="search">
          <SearchOutlinedIcon />
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="right">
        <PersonOutlinedIcon />
        <EmailOutlinedIcon />
        <NotificationsOutlinedIcon />
        <div className="user">
          <img
            src="https://images.unsplash.com/photo-1665686304355-0b09b1e3b03c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80 "
            alt="user photo"
          />
          <span>Emma Murphy</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
