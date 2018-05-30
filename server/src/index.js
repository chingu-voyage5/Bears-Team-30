const { GraphQLServer } = require('graphql-yoga');
const { dummyFood, dummyOrders, orderId } = require('./dummyData.js');

const resolvers = {
  Query: {
    allFood: () => dummyFood,
    findFoodById: (_, args) => dummyFood.find(obj => obj.id == args.id),
    allOrders: () => dummyOrders,
    findOrderById: (_, args) => dummyOrders.find(obj => obj.id == args.id)
  }
};

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers
});
server.start(() => console.log('GraphQL server on localhost:4000'));
