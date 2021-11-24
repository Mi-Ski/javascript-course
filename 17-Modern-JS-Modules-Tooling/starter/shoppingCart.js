console.log('XD export');

const shippingCost = 10;
const cart = [];

export const addToCart = (product, quantity) => {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} was added to the cart.`);
};

const totalPrice = 233;
const totalQuantity = 222;
export { totalPrice, totalQuantity };

export default () => {
	console.log('defEx');
}