const express = require("express");
const app = express();
const userRoutes = require("./routes/users");

app.use("/api/users", userRoutes);

app.listen(6000, () => {
  console.log("app run on the server");
});
