const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const userRoutes = require("./routes/users");
const postRoutes = require("./routes/posts");
const likeRoutes = require("./routes/likes");
const commentRoutes = require("./routes/comments");
const authRoutes = require("./routes/auth");

const app = express();

//middleware
app.use((req, res, next) => {
  //cors
  res.header("Access-Control-Allow-Credentials", true);

  next();
});

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
  }),
);
app.use(cookieParser());

app.use("/api/auth", authRoutes);
// app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
// app.use("/api/comments", commentRoutes);
// app.use("/api/likes", likeRoutes);

app.listen(8000, () => {
  console.log("app run on the server");
});
