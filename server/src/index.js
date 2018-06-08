const { GraphQLServer } = require('graphql-yoga');
const mongoose = require('mongoose');
const { uri } = require('../server.config.js');

// MongoDB Models
const MenuItem = require('./models/menuItem');
const Order = require('./models/order');

let { dummyFood, dummyOrders, orderId } = require('./dummyData.js');
var ObjectId = mongoose.Types.ObjectId;

const resolvers = {
  Query: {
    allMenuItems: () => MenuItem.find({}),
    findMenuItemById: (_, args) => MenuItem.findById({ _id: args._id }),
    findMenuItemsByCategory: (_, args) => {
      return MenuItem.find({ category: args.category });
    },
    allOrders: () => Order.find({}),
    findOrderById: (_, args) => Order.find({ _id: args._id })
  },
  Mutation: {
    createMenuItem: (_, args) =>
      new MenuItem({
        name: args.name,
        price: args.price,
        category: args.category
      }).save(),
    createOrder: (_, args) => {
      return new Order({
        name: args.name,
        remark: args.remark,
        menuItems: JSON.parse(args.menuItems)[0],
        discountCards: args.discountCards,
        status: 'ordered'
      }).save();
    },
    editOrder: (_, args) => {
      let order = dummyOrders.find(obj => obj.id == args.id);
      console.log(args.name);
      if (args.name) order.name = args.name;
      if (args.remark) order.remark = args.remark;
      if (args.discountCards) order.discountCards = args.discountCards;
      if (args.status) order.status = args.status;

      if (args.orderList) {
        order.orderList = JSON.parse(args.orderList);
        let prices = order.orderList.map(item => item.price);

        order.total =
          prices.reduce((sum, currentValue) => sum + currentValue) -
          order.discountCards * 2;

        order.totalDishes = prices.length;
      }
      dummyOrders.find(obj => {
        if (obj.id == args.id) {
          obj = order;
        }
      });
      return order;
    }
  }
};

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers
});
mongoose.connect(uri);
mongoose.connection.once('open', () => console.log('Connected to MongoDB'));
server.start(() => console.log('GraphQL server on localhost:4000'));
