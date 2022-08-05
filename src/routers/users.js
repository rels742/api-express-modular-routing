const express = require("express");

const usersRoute = express.Router();

const { books, films, users } = require("../../data.js");

usersRoute.get("/:id", (req, res) => {
  // console.log("we're working fine over here!");
  // console.log(users);

  const userFound = users.find((user) => user.id === Number(req.params.id));

  if (!userFound) {
    return res.status(404).json("A user with the provided ID does not exist");
  }

  res.json({
    user: userFound,
  });
});

module.exports = usersRoute;
