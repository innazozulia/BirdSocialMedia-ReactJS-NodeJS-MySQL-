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

  //upload files
  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await makeRequest.post("/upload", formData);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

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

  const handleClick = async (e) => {
    e.preventDefault();
    let imgUrl = "";
    if (file) imgUrl = await upload();
    mutation.mutate({ desc, img: imgUrl });
    setDesc("");
    setFile(null);
  };

  return (
    <div className="share">
      <div className="container">
        <div className="top">
          <div className="left">
            <img
              src="https://images.unsplash.com/photo-1668355127376-91b48ed7ee7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2795&q=80"
              alt=""
            />
            {/* <img
              src={currentUser.profilePicture}
              alt=""
            /> */}
            <input
              type="text"
              placeholder={`What's on your mind  ${currentUser.name}?`}
              onChange={(e) => setDesc(e.target.value)}
              value={desc}
            />
          </div>
          <div className="right">
            {file && (
              <img
                className="file"
                alt=""
                src={URL.createObjectURL(file)}
              />
            )}
          </div>
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
