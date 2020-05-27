const cart = [];

// add to cart
const setCart = (book) => {
    cart.push(book);
};

// get the cart
const getCart = () => {
    return cart;
};

export default {setCart, getCart};