const express = require("express");
const app = express();
const port = 3030;

const cors = require("cors");
const morgan = require("morgan");

// SETUP MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// REQUIRE ROUTERS
// const usersRouter = require("./src/routers/users");

// ADD ROUTERS TO APP

const { books, films, users } = require("./data.js");

//Route/endpoint for get a user by ID
app.get("/users/:id", (req, res) => {
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

/* START SERVER */
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}/`);
});
