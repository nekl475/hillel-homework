obj = {
    x: 10,
    y: 20,
    inner: {
        x: 20,
        z: 30
    },
    foo2: {
        k: 23,
        p: 13
    }
};

function convert(obj) {
    let x = {};

    for (let key in obj) {
        if (typeof obj[key] === 'object') {
            newObject = Object.assign(x, obj[key]);
        } else {
            x[key] = obj[key];
        }

    }

    return newObject;
}

console.log(convert(obj));