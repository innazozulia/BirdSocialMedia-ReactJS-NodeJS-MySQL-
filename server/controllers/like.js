const db = require("../connect");
const jwt = require("jsonwebtoken");

const getLikes = (req, res) => {
  const getLike = "SELECT userId FROM likes WHERE postId = ?";

  db.query(getLike, [req.query.postId], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data.map((like) => like.userId));
  });
};

module.exports = getLikes;
