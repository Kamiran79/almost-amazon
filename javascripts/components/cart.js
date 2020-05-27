import utils from '../helpers/utils.js';
import cartData from '../helpers/data/cartData.js';

const addToCart = (newBook) => {
    cartData.setCart(newBook);
    cartToDom();
    // add it to the cart
    // reprint the cart to the dom?
};

const cartToDom = () => {
    const myCart = cartData.getCart();    
    let domString = '';
    for (let i = 0; i < myCart.length; i++) {
        const cartItem = myCart[i];
        domString += `<h3>${cartItem.title}</h3>`;
    }
    //`
    //    <h3>This IS THE CART</h3>        
    //`;

    utils.printToDom("#cart", domString);
}

export default { addToCart };