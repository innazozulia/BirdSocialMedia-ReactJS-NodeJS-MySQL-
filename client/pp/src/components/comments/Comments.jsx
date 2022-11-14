import React from "react";
import { AuthContext } from "../../context/authContext";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { makeRequest } from "../../axios";
import moment from "moment";

import "./comments.scss";

const Comments = ({ postId }) => {
  const [desc, setDesc] = React.useState("");
  const { currentUser } = React.useContext(AuthContext);

  const { isLoading, error, data } = useQuery(["comments"], () =>
    makeRequest.get("/comments?postId=" + postId).then((res) => {
      return res.data;
    }),
  );

  const queryClient = useQueryClient(); //tanstack

  // Mutations post comment
  const mutation = useMutation(
    (newComment) => {
      return makeRequest.post("/comments", newComment);
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries(["comments"]);
      },
    },
  );
  //Mutation delete comment
  // const deleteMutation = useMutation(
  //   (postId) => {
  //     return makeRequest.delete("/comments" + postId);
  //   },
  //   {
  //     onSuccess: () => {
  //       // Invalidate and refetch
  //       queryClient.invalidateQueries(["comments"]);
  //     },
  //   },
  // );

  const handleClick = async (e) => {
    e.preventDefault();
    mutation.mutate({ desc, postId: postId });
    setDesc("");
  };

  // const handleDelete = () => {
  //   deleteMutation.mutate(postId);
  // };

  return (
    <div className="comments">
      <div className="write">
        {/* <img
          src={"/upload/" + currentUser.profilePicture}
          alt=""
        /> */}
        <img
          src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
          alt="user"
        />
        <input
          type="text"
          placeholder="write a comment"
          onChange={(e) => setDesc(e.target.value)}
          value={desc}
        />
        <button onClick={handleClick}>Send</button>
      </div>
      {error
        ? "error"
        : isLoading
        ? "Loading..."
        : data.map((comment) => (
            <div
              key={comment.id}
              className="comment">
              <img
                src={"/upload/" + comment.profilePicture}
                alt=""
              />
              <div className="info">
                <span>{comment.name}</span>
                <p>{comment.desc}</p>
              </div>
              <span className="date">
                {moment(comment.createdAt).fromNow()}
              </span>
              {/* <button onClick={handleDelete}>Delete</button> */}
            </div>
          ))}
    </div>
  );
};

export default Comments;
