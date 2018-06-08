const { GraphQLServer } = require('graphql-yoga');
const mongoose = require('mongoose');

const { uri } = require('../server.config.js');
const { setTime } = require('./utils');

// MongoDB Models
const MenuItem = require('./models/menuItem');
const Order = require('./models/order');

let ObjectId = mongoose.Types.ObjectId;

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
        qty: args.qty,
        discountCards: args.discountCards,
        total: args.total,
        orderedAt: setTime(),
        status: 'ordered'
      }).save();
    },
    editOrder: (_, args) => {
      let update = {};
      if (args.name) update.name = args.name;
      if (args.remark) update.remark = args.remark;
      if (args.tableNumber) update.tableNumber = args.tableNumber;

      if (args.status) {
        if (args.status === 'scanned') update.scannedAt = setTime();
        if (args.status === 'delivered') update.deliveredAt = setTime();
      }

      if (args.menuItems) {
        // If menuItems are updated, total and qty may change
        if (!args.qty)
          throw `args.qty and args.total is required to update menuItems`;

        update.menuItems = JSON.parse(args.menuItems)[0];
        update.total = args.total;
        update.qty = args.qty;
      }

      if (args.discountCards) {
        // If discount cards updated, total will change
        if (!args.total) throw 'args.total is required to update discountCards';

        update.discountCards = args.discountCards;
        update.total = args.total;
      }
      return Order.findByIdAndUpdate(args._id, update, { new: true }).exec();
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
