function main(a = 2, b = 3, c) {

    let result = sum(a, b);
    if (typeof c === 'function') {
        f = c(result);
        return f;
    } else {
        return result;
    }

}

function c(value) {
    return value * 10;
}

function sum(a, b) {
    return a + b;
}

let result = main(5, 6, c);
console.log(result);