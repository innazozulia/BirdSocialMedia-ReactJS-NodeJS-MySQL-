import React from "react";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Comments from "../comments/Comments";
import { Link } from "react-router-dom";
import { makeRequest } from "../../axios";
import { useQuery } from "@tanstack/react-query";
import moment from "moment";

import "./post.scss";

const Post = ({ post }) => {
  const [commentOpen, setCommentOpen] = React.useState(false);
  // const [menuOpen, setMenuOpen] = React.useState(false);

  const { isLoading, error, data } = useQuery(["likes", post.id], () =>
    makeRequest.get("/likes?postId=" + post.id).then((res) => {
      return res.data;
    }),
  );

  console.log(data);

  return (
    <div className="post">
      <div className="container">
        <div className="user">
          <div className="user-info">
            <img
              src={post.profilePicture}
              alt=""
            />
            <div className="details">
              <Link
                to={`/profile/${post.userId}`}
                style={{ textDecoration: "none", color: "inherit" }}>
                <span className="name">{post.name}</span>
              </Link>
              <span className="date">{moment(post.createdAt).fromNow()}</span>
            </div>
          </div>
          <MoreHorizIcon />
        </div>
        <div className="content">
          <p>{post.desc}</p>
          <img
            src={"./upload/" + post.img}
            alt=""
          />
        </div>
        <div className="info">
          <div className="item">
            {/* {likes ? (
              <FavoriteOutlinedIcon style={{ color: "red" }} />
            ) : (
              <FavoriteBorderOutlinedIcon />
            )} */}
            {data.length} Likes
          </div>
          <div
            className="item"
            onClick={() => setCommentOpen(!commentOpen)}>
            <TextsmsOutlinedIcon />
            12 Comments
          </div>
          <div className="item">
            <ShareOutlinedIcon />
            Share
          </div>
        </div>
        {commentOpen && <Comments postId={post.id} />}
      </div>
    </div>
  );
};

export default Post;
