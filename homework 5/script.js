a = +prompt('Enter the number a');
b = +prompt('Enter the number b');
h = +prompt('Enter the step h');
factorial = 1;
sum = 0;
while (a <= b) {
    for (i = 0; i < a; i++) {
        factorial = factorial * (a - i);
    }
    sum += factorial;
    factorial = 1;
    a += h;
}
alert(sum);