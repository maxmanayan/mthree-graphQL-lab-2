const Author = require("../models/Author");
const Book = require("../models/Book");

const resolvers = {
  // Queries ----------------------------------
  Query: {
    async getAllAuthors() {
      let res = await Author.find();

      // finds associated books
      let authors = res.map(async (author) => {
        author["books"] = await Book.find({ authorId: author._id });
        return author;
      });

      return authors;
    },

    async getAllBooks() {
      let res = await Book.find();

      //  finds associated author
      let books = res.map(async (book) => {
        book["author"] = await Author.findById(book.authorId);
        return book;
      });

      return books;
    },

    async getAuthorById(parent, args) {
      const { id } = args;
      let author = await Author.findById(id);
      author["books"] = await Book.find({ authorId: id });

      return author;
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
