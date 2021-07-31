list = [1, 2, 3, 4, 5, 5, 6];

function copy(list, x) {

    for (i = 0, newArr = []; i < list.length; i++) {
        if (x && typeof x === 'function') {
            newArr[i] = x(list[i]);
        } else {
            newArr[i] = list[i];
        }
    }
    return newArr;

}

newList = copy(list, function(value) { return value * 10; });
console.log(newList);