import utils from '../helpers/utils.js';

const cartToDom = () => {
    const domString = `
        <h3>This IS THE CART</h3>        
    `;

    utils.printToDom("#cart", domString);
}

export default { cartToDom };