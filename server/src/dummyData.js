let dummyFood = [
  {
    id: '1',
    name: 'soup',
    price: 2.5,
    category: 'misc'
  },
  {
    id: '2',
    name: 'adult chicken nat',
    price: 16,
    category: 'adult'
  },
  {
    id: '3',
    name: 'adult chicken curry',
    price: 16,
    category: 'adult'
  },
  {
    id: '4',
    name: 'adult chicken prov',
    price: 16,
    category: 'adult'
  },
  {
    id: '5',
    name: 'adult chicken appel',
    price: 16,
    category: 'adult'
  },
  {
    id: '6',
    name: 'child chicken nat',
    price: 11,
    category: 'child'
  },
  {
    id: '7',
    name: 'child chicken curry',
    price: 11,
    category: 'child'
  },
  {
    id: '8',
    name: 'child chicken prov',
    price: 11,
    category: 'child'
  },
  {
    id: '9',
    name: 'child chicken appel',
    price: 11,
    category: 'child'
  }
];

let dummyOrders = [
  {
    id: '1',
    name: 'ibrahim butt',
    remark: 'make it spicy plz',
    discountCards: 1,
    menuItems: [
      { foodId: '1', name: 'soup', price: 1, category: 'misc', quantity: 1 },
      {
        foodId: '3',
        name: 'adult chicken curry',
        price: 1,
        category: 'adult',
        quantity: 1
      }
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
    menuItems: [
      { foodId: '1', name: 'soup', price: 1, category: 'misc', quantity: 1 },
      {
        foodId: '4',
        name: 'adult chicken prov',
        price: 1,
        category: 'adult',
        quantity: 1
      }
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
