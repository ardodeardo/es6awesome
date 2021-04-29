function sum(a, b) {
    b = (typeof b !== 'undefined') ?  b : 1;
    return console.log(a + b);
}

function multiply(a, b = 1) {
    return console.log(a * b);
}

export { sum, multiply };