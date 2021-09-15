const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    name: String,
    genre: String,
    authorId: String,
  },
  {
    collection: "books-oneToMany",
  }
);

module.exports = mongoose.model("Book", bookSchema);
