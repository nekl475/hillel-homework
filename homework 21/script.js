function assignObjects(obj) {
    for (let i = 0; i < arguments.length; i++) {
        let arg = arguments[i];
        for (let key in arg) {
            obj[key] = arg[key];
        }
    }

    return obj;

}

console.log(assignObjects({ x: 10, y: 20 }, { z: 30 }, { a: 10, f: 20 }, { r: 30 }, { onbeforeunload: 30 }));
console.log(assignObjects({ x: 10 }, { x: 20, y: 30 }, { key: 'hello', x: 5 }));



function assignObjects(obj1, obj2, ...obj) {
    let newObj = {};
    newObj = Object.assign({}, obj1, obj2, ...obj);
    return newObj;

}

console.log(assignObjects({ x: 10, y: 20 }, { z: 30 }, { a: 10, f: 20 }, { r: 30 }, { onbeforeunload: 30 }));
console.log(assignObjects({ x: 10 }, { x: 20, y: 30 }, { key: 'hello', x: 5 }));