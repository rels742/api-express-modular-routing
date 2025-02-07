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
const usersRoute = require("./src/routers/users");
const filmsRoute = require("./src/routers/films");

// ADD ROUTERS TO APP
app.use("/users", usersRoute);
app.use("/films", filmsRoute);

// const { books, films, users } = require("./data.js");

/* START SERVER */
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}/`);
});
