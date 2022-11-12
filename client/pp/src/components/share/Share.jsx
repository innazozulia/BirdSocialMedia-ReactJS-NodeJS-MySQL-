import React from "react";
import Friend from "../../assets/friend.png";
import Map from "../../assets/map.png";
import Image from "../../assets/img.png";
import { AuthContext } from "../../context/authContext";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { makeRequest } from "../../axios";

import "./share.scss";

const Share = () => {
  const [file, setFile] = React.useState(null);
  const [desc, setDesc] = React.useState("");

  const { currentUser } = React.useContext(AuthContext);

  const queryClient = useQueryClient(); //tanstack

  // Mutations
  const mutation = useMutation(
    (newPost) => {
      return makeRequest.post("/posts", newPost);
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries(["posts"]);
      },
    },
  );

  const handleClick = (e) => {
    e.preventDefault();
    mutation.mutate({ desc });
  };

  return (
    <div className="share">
      <div className="container">
        <div className="top">
          <img
            src={currentUser.profilePicture}
            alt="user"
          />
          <input
            type="text"
            placeholder={`What's on your mind ${currentUser.name}?`}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <input
              type="file"
              id="file"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />
            <label htmlFor="file">
              <div className="item">
                <img
                  src={Image}
                  alt="share"
                />
                <span>Add Image</span>
              </div>
            </label>
            <div className="item">
              <img
                src={Map}
                alt="share place"
              />
              <span>Add Place</span>
            </div>
            <div className="item">
              <img
                src={Friend}
                alt="tag friends"
              />
              <span>Tag Friends</span>
            </div>
          </div>
          <div className="right">
            <button onClick={handleClick}>Share</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;
