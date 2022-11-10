const db = require("../connect");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const register = (req, res) => {
  //check user if exist
  const checkUser = "SELECT * FROM users WHERE username = ?"; //const query = "SELECT FROM users WHERE username = req.body.username";

  db.query(checkUser, [req.body.username], (err, data) => {
    if (err) return res.status(500).json(err);

    if (data.length) return res.status(409).json("User already exists ");

    //create a new user
    //hash the password
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(req.body.password, salt);

    const createUser =
      "INSERT INTO users (`username`,`email`,`password`,`name`) VALUE (?)";

    const valuesDB = [
      req.body.username,
      req.body.email,
      hashedPassword,
      req.body.name,
    ];

    db.query(createUser, [valuesDB], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("User has been created");
    });
  });
};

const login = (req, res) => {
  //check user
  const checkUser = "SELECT * FROM users WHERE username = ?";

  db.query(checkUser, [req.body.username], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length === 0) return res.status(404).json("User not found");

    const checkPassword = bcrypt.compareSync(
      req.body.password,
      data[0].password,
    );

    if (!checkPassword)
      return res.status(400).json("Wrong password of username");

    //create token
    const token = jwt.sign({ id: data[0].id }, "secretkey");

    const { password, ...others } = data[0];

    res
      .cookie("accessToken", token, {
        httpOnly: true,
      })
      .status(200)
      .json(others);
  });
};

const logout = (req, res) => {
  res
    .clearCookie("accessToken", {
      secure: true,
      sameSite: "none",
    })
    .status(200)
    .json("User has benn logged out");
};

module.exports = { login, register, logout };
