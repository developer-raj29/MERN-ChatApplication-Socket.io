const express = require("express");
const app = express();
require("dotenv").config();
const http = require("http");
const cors = require("cors");

const PORT = process.env.PORT || 5000;
const DB = require("./config/db");

const server = http.createServer(app);

DB();

// Middleware setup
app.use(express.json({ limit: "4mb" }));
app.use(cors());

app.get("/", (req, res) => {
  res.json({
    message: "Quick Chat Application server Start",
  });
});

server.listen(PORT, () => {
  console.log(`Server Starting PORT ${PORT}`);
});
