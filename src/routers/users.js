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

usersRoute.get("/", (req, res) => {
  //   console.log("we're working fine over here!");

  const allUsers = users;

  res.json({
    users: allUsers,
  });
});

usersRoute.post("/", (req, res) => {
  //   console.log("ready to post!)

  const userId = users.length + 1;
  const newUser = {
    ...req.body,
    id: userId,
  };

  users.push(newUser);

  if (!newUser) {
    return (
      res.status(400).json({
        error: "Miissing fields in request body",
      }) ||
      res.status(409).json({
        error: "a user with the provided email already exists ",
      })
    );
  }

  res.json({
    user: {
      ...newUser,
    },
  });
});

module.exports = usersRoute;
