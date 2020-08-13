const express = require("express");
const recipeRouter = require("./recipes/recipeRouter");

const server = express();

server.use(express.json());

server.use("/api/recipes", recipeRouter);

server.get("/", (req, res) => {
  res.send("API is running");
});

module.exports = server;
