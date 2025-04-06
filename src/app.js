const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(
  cors({
    origin: "https://zealthy-frontend.netlify.app",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(bodyParser.json());

module.exports = app;
