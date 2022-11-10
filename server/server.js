const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const userRoutes = require("./routes/users");
const postRoutes = require("./routes/posts");
const likeRoutes = require("./routes/likes");
const commentRoutes = require("./routes/comments");
const authRoutes = require("./routes/auth");

//middleware
app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
// app.use("/api/users", userRoutes);
// app.use("/api/posts", postRoutes);
// app.use("/api/comments", commentRoutes);
// app.use("/api/likes", likeRoutes);

app.listen(8000, () => {
  console.log("app run on the server");
});
