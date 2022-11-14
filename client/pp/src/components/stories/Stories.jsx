import React from "react";

import { AuthContext } from "../../context/authContext";

import "./stories.scss";

const Stories = () => {
  const { currentUser } = React.useContext(AuthContext);

  //TEMPORARY
  const stories = [
    {
      id: 1,
      name: "new stories",
      img: "https://images.unsplash.com/photo-1667860920176-789a82fce553?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    },

    {
      id: 2,
      name: "new stories",
      img: "https://images.unsplash.com/photo-1667860920176-789a82fce553?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    },

    {
      id: 3,
      name: "new stories",
      img: "https://images.unsplash.com/photo-1667860920176-789a82fce553?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    },

    {
      id: 4,
      name: "new stories",
      img: "https://images.unsplash.com/photo-1667860920176-789a82fce553?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    },
  ];

  return (
    <div className="stories">
      <div className="story">
        <img
          src="https://images.unsplash.com/photo-1668355127376-91b48ed7ee7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2795&q=80"
          alt=""
        />
        {/* <img src={currentUser.profilePicture} alt="" /> */}
        <span> {currentUser.name}</span> <button>+</button>
      </div>
      {stories.map((story) => (
        <div
          className="story"
          key={story.id}>
          <img
            src={story.img}
            alt=""
          />
          <span> {story.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Stories;
