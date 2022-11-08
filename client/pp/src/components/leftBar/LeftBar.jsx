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

import "./leftbar.scss";

const LeftBar = () => {
  return (
    <div className="leftbar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img
              src="https://images.unsplash.com/photo-1665686304355-0b09b1e3b03c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt="user photo"
            />
            <span>Emma Murphy</span>
          </div>

          <div className="item">
            <img src={Frineds} alt="friends" />
            <span>Friends</span>
          </div>
          <div className="item">
            <img src={Groups} alt="friends" />
            <span>Groups</span>
          </div>
          <div className="item">
            <img src={Market} alt="friends" />
            <span>Marketplace</span>
          </div>
          <div className="item">
            <img src={Watch} alt="friends" />
            <span>Watch</span>
          </div>
          <div className="item">
            <img src={Memories} alt="friends" />
            <span>Memories</span>
          </div>
        </div>
        <hr></hr>
        <div className="menu">
          <span>Your shortcuts</span>
          <div className="item">
            <img src={Events} alt="friends" />
            <span>Events</span>
          </div>
          <div className="item">
            <img src={Gaming} alt="friends" />
            <span>Gaming</span>
          </div>
          <div className="item">
            <img src={Gallery} alt="friends" />
            <span>Gallery</span>
          </div>
          <div className="item">
            <img src={Watch} alt="friends" />
            <span>Watch</span>
          </div>
          <div className="item">
            <img src={Message} alt="friends" />
            <span>Message</span>
          </div>
        </div>
        <hr></hr>
        <div className="menu">
          <span>Other</span>
          <div className="item">
            <img src={Donate} alt="friends" />
            <span>Donate</span>
          </div>
          <div className="item">
            <img src={Tutorials} alt="friends" />
            <span>Tutorials</span>
          </div>
          <div className="item">
            <img src={Courses} alt="friends" />
            <span>Courses</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
