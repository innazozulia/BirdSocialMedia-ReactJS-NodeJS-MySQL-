const db = require("../connect");
const jwt = require("jsonwebtoken");

const getPosts = (req, res) => {
  const q = `SELECT p.*, u.id AS userId, name, profilePicture FROM posts AS p JOIN users AS u ON (u.id = p.userId)`; // show only froiends posts

  db.query(q, (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data);
  });
};
module.exports = getPosts;
