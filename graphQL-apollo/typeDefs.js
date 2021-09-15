const { gql } = require("apollo-server-express");

const typeDefs = gql`
  # Objects --------------------------------------------------
  type Author {
    id: ID!
    name: String!
    age: Int!
  }

  type Book {
    id: ID!
    name: String!
    genre: String!
    authorId: ID!
  }

  # Queries --------------------------------------------------
  type Query {
    getAllAuthors: [Author!]!

    getAllBooks: [Book!]!

    getAuthorById(id: ID!): Author

    getBookById: Book
  }

  # Mutations --------------------------------------------------
  type Mutation {
    createAuthor(name: String!, age: Int!): Author

    createBook(authorId: ID!, name: String!, genre: String!): Book
  }
`;

module.exports = { typeDefs };
