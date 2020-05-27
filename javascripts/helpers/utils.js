const printToDom = (selector, text) => {
    //const selectDiv = document.getElementById(selector);
    document.querySelector(selector).innerHTML = text;
    //selectDiv.innerHTML = text;

}

export default { printToDom };