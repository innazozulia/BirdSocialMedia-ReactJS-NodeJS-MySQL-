const db = require("../connect");
const jwt = require("jsonwebtoken");

const getUser = (req, res) => {
  const userId = req.params.userId;
  const queryUser = "SELECT * FROM users WHERE id=?";

  db.query(queryUser, [userId], (err, data) => {
    if (err) return res.status(500).json(err);
    const { password, ...info } = data[0];
    return res.json(info);
  });
};

const updateUser = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not authenticated!");

  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const queryUpdateUser =
      "UPDATE users SET `name`=?,`city`=?,`website`=?,`profilePicture`=?,`coverPic`=? WHERE id=? ";

    db.query(
      queryUpdateUser,
      [
        req.body.name,
        req.body.city,
        req.body.website,
        req.body.coverPic,
        req.body.profilePicture,
        userInfo.id,
      ],
      (err, data) => {
        if (err) res.status(500).json(err);
        if (data.affectedRows > 0) return res.json("Updated!");
        return res.status(403).json("You can update only your post!");
      },
    );
  });
};

module.exports = { getUser, updateUser };
