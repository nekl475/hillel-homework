function getArr(a = [], b = []) {

    for (i = 0, sumA = 0; i <= a.length; i++) {
        if (typeof a[i] === 'number') {
            sumA += a[i];

        } else {
            sumA += 0;
        }

    }
    for (i = 0, sumB = 0; i <= b.length; i++) {
        if (typeof b[i] === 'number') {
            sumB += b[i];

        } else {
            sumB += 0;
        }
    }
    return (sumA > sumB) ? a : b;
}
a = [1, 2, 3, 'hello', 4, 5];
b = [1, 2, 3, true, 4, undefined, 6];

res = getArr(a, b);

console.log(res);