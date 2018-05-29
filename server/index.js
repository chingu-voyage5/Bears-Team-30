const { GraphQLServer } = require('graphql-yoga');

const resolvers = {};

const server = new GraphQLServer({ typeDefs: './schema.graphql', resolvers });
server.start(() => console.log('GraphQL server on localhost:4000'));
