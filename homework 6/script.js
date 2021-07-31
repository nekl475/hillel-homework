sum = 0;

for (x = 2; x <= 250; x++) {
    SimpleNumber = true;
    if (x % 2 > 0) {

        for (i = 3; i * i <= x; i++) {
            if (x % i == 0) {
                SimpleNumber = false;

            }
        }

    } else if (x != 2) {
        SimpleNumber = false;
    }
    if (SimpleNumber == true) {
        sum += x;
    }

}
alert(sum);