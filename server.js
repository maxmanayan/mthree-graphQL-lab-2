// imports
require("dotenv").config();
const { ApolloServer } = require("apollo-server-express");
const express = require("express");
const mongoose = require("mongoose");
const typeDefs = require("./graphQL-apollo/typeDefs");
const resolvers = require("./graphQL-apollo/resolvers");

// constants
const app = express();
const PORT = 3001;
const server = new ApolloServer({ typeDefs, resolvers });

// mongoose middleware
mongoose.connect(process.env.MONGODB_URL);
const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("MongoDB connected..."));

// apollo middleware
server.applyMiddleware({ app });

// APIs & middleware

// routes

// error handlers

// exports
module.exports = app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
