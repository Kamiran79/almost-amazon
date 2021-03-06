import bookData from '../helpers/data/bookData.js';
import utils from '../helpers/utils.js';
import cart from './cart.js';

// bookData.getBook();

//get the book data
//print the book data to the dom
const addToCartEvent = (e) => {
    e.preventDefault();
    const book = bookData.getBook();
    cart.addToCart(book);
}

const makeStore = () => {
    const bookInfo = bookData.getBook();

    const domString = `
        <h2>Our One Book</h2>
        Buy now! It's only
        <h3 id="book-price">$${bookInfo.price}</h3>
        <img class="book-image" src=${bookInfo.image} alt="book cover"><br/>
        <button id="add-to-cart" class="btn btn-danger">Add to cart</button>
    `;
    utils.printToDom("#store", domString);
    console.log(bookInfo);
    document.querySelector('#add-to-cart').addEventListener('click', addToCartEvent);
    //$('body').on('click')
    $('#add-to-cart').click(addToCartEvent);
}

export default { makeStore };