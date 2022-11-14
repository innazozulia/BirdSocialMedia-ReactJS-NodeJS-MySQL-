import React from "react";
import Frineds from "../../assets/friends.png";
import Groups from "../../assets/groups.png";
import Market from "../../assets/marketplace.png";
import Watch from "../../assets/watch.png";
import Memories from "../../assets/memories.png";
import Events from "../../assets/events.png";
import Gaming from "../../assets/gaming.png";
import Gallery from "../../assets/gallery.png";
import Message from "../../assets/message.png";
import Tutorials from "../../assets/tutorials.png";
import Courses from "../../assets/course.png";
import Donate from "../../assets/donate.png";
import { AuthContext } from "../../context/authContext";

import "./leftbar.scss";

const LeftBar = () => {
  const { currentUser } = React.useContext(AuthContext);

  return (
    <div className="leftbar">
      <div className="container">
        <div className="menu">
          <div className="user">
            {/* <img
              src={"/upload/" + currentUser.profilePicture}
              alt=""
            /> */}
            <img
              src={
                "https://images.unsplash.com/photo-1668355127376-91b48ed7ee7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2795&q=80"
              }
              alt=""
            />
            <span>{currentUser.name}</span>
          </div>

          <div className="item">
            <img
              src={Frineds}
              alt="Groups"
            />
            <span>Groups</span>
          </div>
          <div className="item">
            <img
              src={Groups}
              alt="Groups"
            />
            <span>Groups</span>
          </div>
          <div className="item">
            <img
              src={Market}
              alt="Marketplace"
            />
            <span>Marketplace</span>
          </div>
          <div className="item">
            <img
              src={Watch}
              alt="Watch"
            />
            <span>Watch</span>
          </div>
          <div className="item">
            <img
              src={Memories}
              alt="Memories"
            />
            <span>Memories</span>
          </div>
        </div>
        <hr></hr>
        <div className="menu">
          <span>Your shortcuts</span>
          <div className="item">
            <img
              src={Events}
              alt="Events"
            />
            <span>Events</span>
          </div>
          <div className="item">
            <img
              src={Gaming}
              alt="Gaming"
            />
            <span>Gaming</span>
          </div>
          <div className="item">
            <img
              src={Gallery}
              alt="Gallery"
            />
            <span>Gallery</span>
          </div>
          <div className="item">
            <img
              src={Watch}
              alt="Watch"
            />
            <span>Watch</span>
          </div>
          <div className="item">
            <img
              src={Message}
              alt="Message"
            />
            <span>Message</span>
          </div>
        </div>
        <hr></hr>
        <div className="menu">
          <span>Other</span>
          <div className="item">
            <img
              src={Donate}
              alt="Donate"
            />
            <span>Donate</span>
          </div>
          <div className="item">
            <img
              src={Tutorials}
              alt="Tutorials"
            />
            <span>Tutorials</span>
          </div>
          <div className="item">
            <img
              src={Courses}
              alt="Courses"
            />
            <span>Courses</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
