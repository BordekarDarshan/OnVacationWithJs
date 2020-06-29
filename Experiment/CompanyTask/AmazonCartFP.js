const user = {
  name: "Darshan",
  active: true,
  cart: [],
  purchases: [],
};

function addItemToCart(user, item) {
  const { cart } = user;
  const updateCart = cart.concat(item);
  return Object.assign({}, user, { cart: updateCart });
}

function addTax(user) {
  const { cart } = user;
  const taxRate = 1.3;
  const updateCart = cart.map((item) => {
    return {
      ...item,
      price: item.price * taxRate,
    };
  });
  return Object.assign({}, user, { cart: updateCart });
}

function buyItem(user) {
  const { cart } = user;
  return Object.assign({}, user, { purchases: cart });
}

function emptyCart(user) {
  return Object.assign({}, user, { cart: [] });
}

const compose = (oprOne, oprTwo) => (...arg) => oprOne(oprTwo(...arg));

function purchseItem(...fun) {
  return fun.reduce(compose);
}
let result = purchseItem(emptyCart, buyItem, addTax, addItemToCart);

let final = result(user, { name: "laptop", price: 200 });

console.log(final);
