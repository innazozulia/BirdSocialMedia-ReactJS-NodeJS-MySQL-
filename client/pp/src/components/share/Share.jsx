import React from "react";
import Friend from "../../assets/friend.png";
import Map from "../../assets/map.png";
import Image from "../../assets/img.png";
import { AuthContext } from "../../context/authContext";

import "./share.scss";

const Share = () => {
  const { currentUser } = React.useContext(AuthContext);

  return (
    <div className="share">
      <div className="container">
        <div className="top">
          <img src={currentUser.profilePicture} alt="user" />
          <input
            type="text"
            placeholder={`What's on your mind ${currentUser.name}?`}
          />
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <input type="file" id="file" style={{ display: "none" }} />
            <label htmlFor="file">
              <div className="item">
                <img src={Image} alt="share" />
                <span>Add Image</span>
              </div>
            </label>
            <div className="item">
              <img src={Map} alt="share place" />
              <span>Add Place</span>
            </div>
            <div className="item">
              <img src={Friend} alt="tag friends" />
              <span>Tag Friends</span>
            </div>
          </div>
          <div className="right">
            <button>Share</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;
