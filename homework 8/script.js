console.log('#1');
a = new Array(10);

b = new Array(15);

for (i = 0, min = -10, max = 23; i < a.length; i++) {
    a[i] = Math.floor(Math.random() * (max - min + 1)) + min;
    for (j = 0, min = -5, max = 15; j < b.length; j++) {
        b[j] = Math.floor(Math.random() * (max - min + 1)) + min;
        if (a[i] == b[j]) {
            console.log(`A= ${a[i]} B=${b[j]}`);
            break;
        }

    }
}

console.log('#2');
a = new Array(20);
b = [];
for (i = 0, min = -10, max = 120; i < a.length; i++) {
    a[i] = Math.floor(Math.random() * (max - min + 1)) + min;
    x = 1;
    if (a[i] == 1) {
        x = 0;
    }
    if (a[i] % 2 > 0) {

        for (j = 3; j * j <= a[i]; j++) {
            if (a[i] % j == 0) {
                x = 0;

            }
        }

    } else if (a[i] != 2) {
        x = 0;
    }
    if (x == 1) {
        if (b.indexOf(a[i]) == -1)
            b[b.length] = a[i];
    }
}
for (i = 0, min = max = b[0]; i < b.length; i++) {

    if (b[i] < min)
        min = b[i];

    if (b[i] > max)
        max = b[i];

}
console.log(`Array B = ${b}`);
console.log(`min value = ${min}, max value = ${max}`);

console.log('#3');
a = new Array(20);
b = [];

for (i = 0, min = -10, max = 120; i < a.length; i++) {
    a[i] = Math.floor(Math.random() * (max - min + 1)) + min;
}
for (j = 0, minIndex = maxIndex = 0; j < a.length; j++) {

    if (a[j] < a[minIndex])
        minIndex = j;

    if (a[j] > a[maxIndex])
        maxIndex = j;
}
console.log(`Array A = ${a}`);
console.log(`minIndex value = ${minIndex}, maxIndex value = ${maxIndex}`);
for (i = 0; i < a.length; i++) {
    if (minIndex < maxIndex) {
        if (i > minIndex && i < maxIndex)
            b[b.length] = a[i];
    } else if (minIndex > maxIndex) {
        if (i < minIndex && i > maxIndex)
            b[b.length] = a[i];
    }

}

console.log(`Array B = ${b}`);


console.log('#4');
a = new Array(20);

for (i = 0, min = -10, max = 120; i < a.length; i++) {
    a[i] = Math.floor(Math.random() * (max - min + 1)) + min;
}
for (i = 0, minIndex = maxIndex = 0; i < a.length; i++) {

    if (a[i] <= a[minIndex])
        minIndex = i;

    if (a[i] >= a[maxIndex])
        maxIndex = i;
}
console.log(`First minIndex ${minIndex} = ${a[minIndex]}, maxIndex ${maxIndex} = ${a[maxIndex]}`);
console.log(`Array A = ${a}`);
y = a[minIndex];
a[minIndex] = a[maxIndex];
a[maxIndex] = y;
console.log(`Change of minIndex ${minIndex} = ${a[minIndex]}, maxIndex ${maxIndex} = ${a[maxIndex]}`);
console.log(`Array A = ${a}`);