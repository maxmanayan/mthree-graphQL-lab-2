const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const bookSchema = new mongoose.Schema(
  {
    name: String,
    genre: String,
    authorId: {
      type: ObjectId,
      ref: "Author",
    },
  },
  {
    collection: "booksOneToMany",
  }
);

module.exports = mongoose.model("Book", bookSchema);
