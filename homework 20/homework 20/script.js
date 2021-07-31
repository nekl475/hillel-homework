function assignObjects(obj1, obj2) {
    newObj = Object.assign({}, obj1, obj2);
    return newObj;
}

console.log(assignObjects({ x: 10, y: 20 }, { z: 30 }));
console.log(assignObjects({ x: 10 }, { x: 20, y: 30 }));