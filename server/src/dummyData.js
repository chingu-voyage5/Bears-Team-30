let dummyFood = [
  {
    id: '1',
    name: 'soup',
    price: 2.5
  },
  {
    id: '2',
    name: 'adult chicken nat',
    price: 16
  },
  {
    id: '3',
    name: 'adult chicken curry',
    price: 16
  },
  {
    id: '4',
    name: 'adult chicken prov',
    price: 16
  },
  {
    id: '5',
    name: 'adult chicken appel',
    price: 16
  },
  {
    id: '6',
    name: 'child chicken nat',
    price: 11
  },
  {
    id: '7',
    name: 'child chicken curry',
    price: 11
  },
  {
    id: '8',
    name: 'child chicken prov',
    price: 11
  },
  {
    id: '9',
    name: 'child chicken appel',
    price: 11
  }
];

let dummyOrders = [
  {
    id: '1',
    name: 'ibrahim butt',
    remark: 'make it spicy plz',
    discountCards: 1,
    orderList: [
      { foodId: '1', name: 'soup', price: 1, quantity: 1 },
      { foodId: '3', name: 'adult chicken curry', price: 1, quantity: 1 }
    ],
    total: 16.5,
    totalDishes: 2,
    tableNumber: '15A',
    status: 'completed'
  },
  {
    id: '2',
    name: 'elon musk',
    remark: '',
    discountCards: 1,
    orderList: [
      { foodId: '1', name: 'soup', price: 1, quantity: 1 },
      { foodId: '4', name: 'adult chicken prov', price: 1, quantity: 1 }
    ],
    total: 16.5,
    totalDishes: 2,
    tableNumber: '15A',
    status: 'scanned'
  }
];
let orderId = dummyOrders.length;

module.exports = {
  dummyFood,
  dummyOrders,
  orderId
};
