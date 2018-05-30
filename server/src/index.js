const { GraphQLServer } = require('graphql-yoga');
let { dummyFood, dummyOrders, orderId } = require('./dummyData.js');

const resolvers = {
  Query: {
    allFood: () => dummyFood,
    findFoodById: (_, args) => dummyFood.find(obj => obj.id == args.id),
    allOrders: () => dummyOrders,
    findOrderById: (_, args) => dummyOrders.find(obj => obj.id == args.id)
  },
  Mutation: {
    createOrder: (_, args) => {
      let order = {
        id: orderId++,
        name: args.name,
        remark: args.remark,
        discountCards: args.discountCards,
        tableNumber: args.tableNumber,
        orderList: JSON.parse(args.orderList),
        status: 'ordered'
      };

      let prices = order.orderList.map(item => item.price);

      order.total =
        prices.reduce((sum, currentValue) => sum + currentValue) -
        order.discountCards * 2;

      order.totalDishes = prices.length;

      dummyOrders.push(order);
      return order;
    }
  }
};

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers
});
server.start(() => console.log('GraphQL server on localhost:4000'));
