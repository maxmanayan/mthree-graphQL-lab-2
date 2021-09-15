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

    async getAuthorById(parent, args) {
      const { id } = args;
      let res = await Author.findById(id);
      return res;
    },
  },
  // Mutations ----------------------------------
  Mutation: {
    async createAuthor(parent, args) {
      let newAuthor = new Author({ ...args });
      let res = await newAuthor.save();
      return res;
    },

    async createBook(parent, args) {
      let newBook = new Book({ ...args });
      let res = await newBook.save();
      return res;
    },
  },
};

module.exports = { resolvers };
