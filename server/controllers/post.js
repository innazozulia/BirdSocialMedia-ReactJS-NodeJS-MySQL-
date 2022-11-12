const db = require("../connect");
const jwt = require("jsonwebtoken");
const moment = require("moment");

//get posts
const getPosts = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not logged in!");

  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const quseryPosts = `SELECT p.*, u.id AS userId, name, profilePicture FROM posts AS p JOIN users AS u ON (u.id = p.userId)
   LEFT JOIN relationships AS r ON (p.userId = r.followedUserId) WHERE r.followerUserId= ? OR p.userId =? ORDER BY p.createdAt DESC`; // show only friends posts

    db.query(quseryPosts, [userInfo.id, userInfo.id], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json(data);
    });
  });
};

//add post
const addPost = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not logged in!");

  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const quseryPosts =
      "INSERT INTO posts (`desc`, `img`, `createdAt`, `userId`) VALUES (?)";

    const values = [
      req.body.desc,
      req.body.img,
      moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
      userInfo.id,
    ];

    db.query(quseryPosts, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("Post has been created");
    });
  });
};
module.exports = { getPosts, addPost };
