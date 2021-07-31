sum = 100;

A = prompt("Введите значение переменной А");

if (A <= 0 || isNaN(+A)) {
    alert(`A = ${A} is not valid number.`);

} else {
    alert(
        `A = ${A} is valid number.`);
    sum = sum + (+A);


}
alert(`Sum = ${sum}`);
B = prompt("Введите значение переменной B");

if (B <= 0 || isNaN(+B)) {
    alert(`B = ${B} is not valid number.`);

} else {
    alert(
        `B = ${B} is valid number.`
    );
    sum = sum + (+B);

}
alert(`Sum = ${sum}`);
C = prompt("Введите значение переменной C");

if (C <= 0 || isNaN(+C)) {
    alert(`C = ${C} is not valid number.`);

} else {
    alert(
        `C = ${C} is valid number.`);
    sum = sum + (+C);

}
alert(`Sum = ${sum}`);