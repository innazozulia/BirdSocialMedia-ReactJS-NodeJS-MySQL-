import React from "react";
import "./rightbar.scss";

const RightBar = () => {
  return (
    <div className="rightbar">
      <div className="container">
        <div className="item">
          <span>Suggestions For You</span>
          <div className="user">
            <div className="user-info">
              <img
                src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
                alt="user"
              />
              <span>Piter Blacksmith</span>
            </div>
            <div className="buttons">
              <button>Follow</button> <button>Dismis</button>
            </div>
          </div>
          <div className="user">
            <div className="user-info">
              <img
                src="https://images.unsplash.com/photo-1657214059388-a35554015a42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80"
                alt="user"
              />
              <span>Denny Walter</span>
            </div>
            <div className="buttons">
              <button>Follow</button> <button>Dismis</button>
            </div>
          </div>
        </div>
        <div className="item">
          <span>Latest Activities</span>
          <div className="user">
            <div className="user-info">
              <img
                src="https://images.unsplash.com/photo-1664574654589-8f6c9b94c02d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
                alt="user"
              />
              <p>
                <span>Nick Britos </span> updated status
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="user-info">
              <img
                src="https://plus.unsplash.com/premium_photo-1661809241273-0faedadc0e86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt="user"
              />
              <p>
                <span>Daniella Gretter </span>changed cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="user-info">
              <img
                src="https://images.unsplash.com/photo-1628015081036-0747ec8f077a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2930&q=80"
                alt="user"
              />
              <p>
                <span>Gabriel Brito </span> changed cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="user-info">
              <img
                src="https://images.unsplash.com/photo-1513298666969-adb84fcb4f67?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"
                alt="user"
              />
              <p>
                <span>Julian Myles </span> updated status
              </p>
            </div>
            <span>5 min ago</span>
          </div>
        </div>
        <div className="item">
          <span>Online Friends</span>
          <div className="user">
            <div className="user-info">
              <img
                src="https://images.unsplash.com/photo-1628015081036-0747ec8f077a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2930&q=80"
                alt="user"
              />
              <div className="online"></div> <span>Gabriel Brito </span>
            </div>
          </div>
          <div className="user">
            <div className="user-info">
              <img
                src="https://images.unsplash.com/photo-1668106511452-560f9345cc0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMnx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
                alt="user"
              />
              <div className="online"></div> <span>Brige Niockie</span>
            </div>
          </div>
          <div className="user">
            <div className="user-info">
              <img
                src="https://images.unsplash.com/photo-1513298666969-adb84fcb4f67?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"
                alt="user"
              />
              <div className="online"></div> <span>Julian Myles </span>
            </div>
          </div>
          <div className="user">
            <div className="user-info">
              <img
                src="https://images.unsplash.com/photo-1668366322537-f63f5c1e62c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=864&q=80"
                alt="user"
              />
              <div className="online"></div> <span>Houcine Ncib</span>
            </div>
          </div>
          <div className="user">
            <div className="user-info">
              <img
                src="https://images.unsplash.com/photo-1668072104859-84eb29ba02a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0N3x8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
                alt="user"
              />
              <div className="online"></div> <span>Roberto Hill </span>
            </div>
          </div>
          <div className="user">
            <div className="user-info">
              <img
                src="https://images.unsplash.com/photo-1668035188870-9bba52206be9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0MXx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
                alt="user"
              />
              <div className="online"></div> <span>Celin Fox </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
