const express = require("express");

const filmsRoute = express.Router();

const { books, films, users } = require("../../data.js");

filmsRoute.get("/", (req, res) => {
  const allFilms = films;

  res.json({
    films: allFilms,
  });
});

module.exports = filmsRoute;
