const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema(
  {
    name: String,
    age: Number,
  },
  {
    collection: "authors-oneToMany",
  }
);

module.exports = mongoose.model("Author", authorSchema);
