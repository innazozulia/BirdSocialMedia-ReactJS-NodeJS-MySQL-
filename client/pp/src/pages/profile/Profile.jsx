import {
  FaFacebook,
  FaInstagram,
  FaTwitterSquare,
  FaLinkedin,
  FaPinterest,
  FaGlobe,
  FaRegEnvelope,
} from "react-icons/fa";
import { ImLocation2 } from "react-icons/im";
import { BsThreeDotsVertical } from "react-icons/bs";
import Posts from "../../components/posts/Posts";

import "./profile.scss";

const Profile = () => {
  return (
    <div className="profile">
      <div className="images">
        <img
          src="https://images.unsplash.com/photo-1500964757637-c85e8a162699?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1806&q=80"
          alt="cover"
          className="cover"
        />
        <img
          src="https://images.unsplash.com/photo-1665686304355-0b09b1e3b03c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt="profile"
          className="profile-picture"
        />
      </div>
      <div className="profile-conteiner">
        <div className="u-info">
          <div className="left">
            <a href="http://facebook.com">
              <FaFacebook />
            </a>
            <a href="http://instagram.com">
              <FaInstagram />
            </a>
            <a href="http://twitter.com">
              <FaTwitterSquare />
            </a>
            <a href="http://linkedin.com">
              <FaLinkedin />
            </a>
            <a href="http://pinterest.com">
              <FaPinterest />
            </a>
          </div>
          <div className="center">
            <span>Emma Murphy</span>
            <div className="info">
              <div className="item">
                <ImLocation2 />
                <span>USA</span>
              </div>
              <div className="item">
                <FaGlobe />
                <span>Google.com</span>
              </div>
            </div>
            <button>follow</button>
          </div>
          <div className="right">
            <FaRegEnvelope />
            <BsThreeDotsVertical />
          </div>
        </div>
        <Posts />
      </div>
    </div>
  );
};

export default Profile;
