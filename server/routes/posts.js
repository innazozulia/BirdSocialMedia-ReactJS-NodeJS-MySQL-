const express = require("express");
const { getPosts, addPost } = require("../controllers/post");

const router = express.Router();

router.get("/", getPosts);
router.post("/", addPost);

module.exports = router;
