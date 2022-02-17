import { ApolloServer, gql } from 'apollo-server';

const typeDefs = gql`
  interface Node {
    id: ID!
  }

  type Product implements Node {
    id: ID!
    sku: String!
    name: String!
  }

  type Query {
    products: [Product!]!
  }
`;

const resolvers = {
  Node: {
    __resolveType(node) {
      return node.__typename || null;
    },
  },
  Query: {
    products() {
      return [
        {
          __typename: 'Product',
          id: '1',
          sku: 'ABC123',
          name: 'Cool Chair',
        },
        {
          __typename: 'Product',
          id: '2',
          sku: 'DEF456',
          name: 'Tippy Table',
        },
        {
          __typename: 'Product',
          id: '3',
          sku: 'GHI789',
          name: 'Raggy Rug',
        },
      ];
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`Listening at ${url}`);
});
