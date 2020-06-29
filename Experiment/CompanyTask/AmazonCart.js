const user = {
  name: "kim",
  active: true,
  cart: [],
  purchases: [],
  history: [],
};

const cartData = [
  {
    id: 1,
    name: "TV",
    price: 100,
  },
  {
    id: 2,
    name: "Mobile",
    price: 200,
  },
];

const addItemsToCart = (...items) => {
  for (let data of items) {
    // Try Removing Dots [Destructure].
    return (user.cart = [...user.cart, ...data]);
  }
};

const addTax = () => {
  const { cart } = user;
  for (let index = 0; index < cart.length; index++) {
    let tax = cart[index].price + (3 / 100) * 100;
    cart[index].price = tax;
  }
};

const itemsToPurchase = () => {
  const { cart, purchases } = user;
  for (let index = cart.length - 1; index >= 0; index--) {
    purchases.push(cart[index]);
  }
};

const makeCartEmpty = () => {
  const { cart } = user;
  for (let index = cart.length - 1; index >= 0; index--) {
    cart.pop(cart[index]);
  }
};

const paymentDone = () => {
  const { history, purchases } = user;
  for (let index = purchases.length - 1; index >= 0; index--) {
    history.push(purchases[index]);
    purchases.pop(purchases[index]);
  }
};

addItemsToCart(cartData);
addTax();
itemsToPurchase();
makeCartEmpty();
paymentDone();

console.log(user);
