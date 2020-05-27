console.log("java connected!");

//import bookData from './helpers/data/bookData.js';

//get the book data

//print  the book data to the dom

import store from './components/store.js';
//import utils from '../helpers/utils.js';

const init = () => {
    //console.log(bookData.getBook());
    store.makeStore();
}

init();