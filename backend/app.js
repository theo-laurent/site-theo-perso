const express = require("express");
const app = express();
//
const emailRoutes = require("./routes/emailRoutes");
//CORS
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-with, Content, Accept, Content-type, Authorization"
  );
  next();
});

app.use(express.json());
app.use("/", emailRoutes);

module.exports = app;
