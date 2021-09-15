const Author = require("../models/Author");
const Book = require("../models/Book");

const resolvers = {
  // Queries ----------------------------------
  Query: {
    async getAllAuthors() {
      let res = await Author.find();
      return res;
    },

    async getAllBooks() {
      let res = await Book.find();
      return res;
    },
  },
  // Mutations ----------------------------------
};

module.exports = { resolvers };
