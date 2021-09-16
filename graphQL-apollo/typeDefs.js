const { gql } = require("apollo-server-express");

const typeDefs = gql`
  # Objects --------------------------------------------------
  type Author {
    id: ID!
    name: String!
    age: Int!
    books: [Book!]
  }

  type Book {
    id: ID!
    name: String!
    genre: String!
    authorId: ID!
    author: Author!
  }

  # Queries --------------------------------------------------
  type Query {
    getAllAuthors: [Author!]!

    getAllBooks: [Book!]!

    getAuthorById(id: ID!): Author

    getBookById(id: ID!): Book
  }

  # Mutations --------------------------------------------------
  type Mutation {
    createAuthor(name: String!, age: Int!): Author

    createBook(authorId: ID!, name: String!, genre: String!): Book

    updateAuthor(id: ID!, name: String!, age: Int!): Author

    updateBook(id: ID!, name: String!, genre: String!): Book

    deleteAuthor(id: ID!): ID

    deleteBook(id: ID!): ID
  }
`;

module.exports = { typeDefs };
