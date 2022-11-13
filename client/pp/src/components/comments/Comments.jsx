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

  // Mutations
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

  const handleClick = async (e) => {
    e.preventDefault();
    mutation.mutate({ desc, postId: postId });
    setDesc("");
  };

  return (
    <div className="comments">
      <div className="write">
        <img
          src={currentUser.profilePicture}
          alt=""
        />
        <input
          type="text"
          placeholder="write a comment"
          onChange={(e) => setDesc(e.target.value)}
          value={desc}
        />
        <button onClick={handleClick}>Send</button>
      </div>
      {isLoading
        ? "Loading..."
        : data.map((comment) => (
            <div
              key={comment.id}
              className="comment">
              <img
                src={comment.profilePicture}
                alt=""
              />
              <div className="info">
                <span>{comment.name}</span>
                <p>{comment.desc}</p>
              </div>
              <span className="date">
                {moment(comment.createdAt).fromNow()}
              </span>
            </div>
          ))}
    </div>
  );
};

export default Comments;
