const Author = require("../models/Author");
const Book = require("../models/Book");

const resolvers = {
  // Queries ----------------------------------
  Query: {
    async getAllAuthors() {
      let res = await Author.find();

      // finds associated books
      let authors = res.map(async (author) => {
        let books = await Book.find({ authorId: author._id });
        author["books"] = books;
        return author;
      });

      return authors;
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

    async getBookById(parent, args) {
      const { id } = args;
      let res = await Book.findById(id);
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
