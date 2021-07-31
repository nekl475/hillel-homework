op = prompt('Enter the operation that you will do.(+ - / *)');
while ((op != '+' && op != '-') && (op != '*' && op != '/')) {
    op = prompt('Enter the operation that you will do.');
}


do {
    x = +prompt('Enter the number of operands. More than 1 and less than 7');
} while (x <= 1 || x >= 7 || isNaN(x));


sum = 0;
resultString = '';
if (op == '+') {
    for (j = 1; j <= x; j++) {
        do {
            number = +prompt('Enter the number');
        } while (isNaN(number));
        sum += number;
        if (j < x) {
            resultString += `${number}+`;

        } else {
            resultString += `${number}`;
        }
    }
    alert(resultString + '=' + sum);
}
if (op == '*') {
    sum = 1;
    for (j = 1; j <= x; j++) {
        do {
            number = +prompt('Enter the number');
        } while (isNaN(number));

        sum *= number;
        if (j < x) {
            resultString += `${number}*`;

        } else {
            resultString += `${number}`;
        }
    }
    alert(resultString + '=' + sum);
}

if (op == '-') {
    for (j = 1; j <= x; j++) {
        do {
            number = +prompt('Enter the number');
        } while (isNaN(number));
        if (sum == 0) {
            number -= sum;
            sum = number;
        } else {
            sum -= number;
        }
        if (j < x) {
            resultString += `${number}-`;

        } else {
            resultString += `${number}`;
        }

    }
    alert(resultString + '=' + sum);
}
if (op == '/') {

    for (j = 1; j <= x; j++) {
        do {
            number = +prompt('Enter the number');
        } while (isNaN(number));
        if (sum == 0) {
            sum = number;
        } else {
            sum /= number;
        }
        if (j < x) {
            resultString += `${number}/`;


        } else {
            resultString += `${number}`;
        }

    }
    alert(resultString + '=' + sum);
}