const express = require("express");
const getPosts = require("../controllers/post");

const router = express.Router();

router.get("/", getPosts);

module.exports = router;
