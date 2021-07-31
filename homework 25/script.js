class SuperMath {
    constructor(x, y, znak) {
        this.x = x;
        this.y = y;
        this.znak = znak;
    }

    check() {

        let oper = confirm(`Do you wanna do operation ${this.x}${this.znak}${this.y}?`);

        if (oper) {
            return this.math(this.znak);

        } else {
            return this.input();
        }
    }

    input() {
        do {
            this.x = +prompt(`enter x`);
        } while (!this.x);

        this.y = +prompt(`enter y`);
        this.znak = prompt(`enter znak`);
        return this.math(this.znak);


    }

    math(x) {
        switch (x) {
            case `+`:
                alert(this.x + this.y);
                break;
            case `-`:
                alert(this.x - this.y);
                break;
            case `*`:
                alert(this.x * this.y);
                break;
            case `/`:
                alert(this.x / this.y);
                break;

        }
    }

}

let obj = new SuperMath(10, 25, '+');
obj.check();