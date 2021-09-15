// imports
require("dotenv").config();
const { ApolloServer } = require("apollo-server-express");
const express = require("express");
const mongoose = require("mongoose");

const app = express();

// constants
const PORT = 3001;

// apollo middleware

// mongoose middleware

// APIs & middleware

// routes

// error handlers

// exports
module.exports = app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
