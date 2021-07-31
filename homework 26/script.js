const HAMBURGER = {
    size: {
        lit: [5, 20],
        big: [15, 40]
    },
    fil: {
        cheese: [1, 20],
        salad: [2, 5],
        potato: [1.5, 10]
    },
    top: {
        spies: [1.5, 0],
        mayo: [2, 5]
    }

};

class Hamburg {
    constructor(size, fil = 0, top = 0) {
        this.size = size;
        this.fil = fil;
        this.top = top;

    }
    calori() {

        let calS = HAMBURGER.size[this.size] ? HAMBURGER.size[this.size][1] : 0;
        let calf = HAMBURGER.fil[this.fil] ? HAMBURGER.fil[this.fil][1] : 0;
        let calt = HAMBURGER.top[this.top] ? HAMBURGER.top[this.top][1] : 0;
        return calS + calf + calt;
    }
    price() {

        let salS = HAMBURGER.size[this.size] ? HAMBURGER.size[this.size][0] : 0;
        let salf = HAMBURGER.fil[this.fil] ? HAMBURGER.fil[this.fil][0] : 0;
        let salt = HAMBURGER.top[this.top] ? HAMBURGER.top[this.top][0] : 0;
        return salS + salf + salt;
    }
}


let order = new Hamburg(`big`, `potato`);
console.log(order.calori() + ` calori`);
console.log(order.price() + ` USD`);