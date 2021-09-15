const Author = require("../models/Author");
const Book = require("../models/Book");

const resolvers = {
  // Queries ----------------------------------
  Query: {
    async getAllAuthors() {
      try {
        let res = await Author.find();
        console.log(res);
        // finds associated books
        let authors = res.map(async (author) => {
          author["books"] = await Book.find({ authorId: author._id });
          return author;
        });
        console.log(authors);
        return authors;
      } catch (error) {
        console.log(error);
      }
    },

    async getAllBooks() {
      try {
        let res = await Book.find();
        //  finds associated author
        let books = res.map(async (book) => {
          book["author"] = await Author.findById(book.authorId);
          return book;
        });
        return books;
      } catch (error) {
        console.log(error);
      }
    },

    async getAuthorById(parent, args) {
      try {
        const { id } = args;
        let author = await Author.findById(id);
        author["books"] = await Book.find({ authorId: id });
        return author;
      } catch (error) {
        console.log(error);
      }
    },

    async getBookById(parent, args) {
      try {
        const { id } = args;
        let book = await Book.findById(id);
        book["author"] = await Author.findById(book.authorId);
        return book;
      } catch (error) {
        console.log(error);
      }
    },
  },
  // Mutations ----------------------------------
  Mutation: {
    async createAuthor(parent, args) {
      try {
        let newAuthor = new Author({ ...args });
        let res = await newAuthor.save();
        return res;
      } catch (error) {
        console.log(error);
      }
    },

    async createBook(parent, args) {
      try {
        let newBook = new Book({ ...args });
        let res = await newBook.save();
        return res;
      } catch (error) {
        console.log(error);
      }
    },

    async updateAuthor(parent, args) {
      try {
        let { id, name, age } = args;
        let res = await Author.findById(id);
        console.log("res", res);
        if (name && age) {
          res["name"] = name;
          res["age"] = age;
        }
        let updatedUser = await res.save();
        console.log("updatedUser", updatedUser);
        return updatedUser;
      } catch (error) {
        console.log(error);
      }
    },
  },
};

module.exports = { resolvers };
