import React from "react";
import Post from "../post/Post";
import { useQuery } from "@tanstack/react-query";
import { makePequest } from "../../axios";

import "./posts.scss";

const Posts = () => {
  const { isLoading, error, data } = useQuery(["posts"], () => {
    makePequest.get("/posts").then((res) => {
      return res.data;
    });
  });
  // const { isLoading, error, data } = useQuery(["posts"], () => {
  //   makePequest.get("/posts").then((res) => {
  //     return res.data;
  //   });
  // });

  TEMPORARY;

  const posts = [
    {
      id: 1,
      name: "Emma Murphy",
      userId: 1,
      profilePicture:
        "https://images.unsplash.com/photo-1665686304355-0b09b1e3b03c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      img: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },

    {
      id: 2,
      name: "Emma Murphy",
      userId: 2,
      profilePicture:
        "https://images.unsplash.com/photo-1665686304355-0b09b1e3b03c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      desc: "Tenetur iste voluptates dolorem rem commodi voluptate pariatur, voluptatum, laboriosam consequatur enim nostrum cumque! Maiores a nam non adipisci minima modi tempore.",
    },
  ];

  return (
    <div className="posts">
      {data.map((post) => (
        <Post
          post={post}
          key={post.id}
        />
      ))}
    </div>
  );
};

export default Posts;
