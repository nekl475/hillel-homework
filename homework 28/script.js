let last = document.querySelectorAll(`.root>li:last-child`);

last.forEach(key => setTimeout(() => key.classList.add(`last`), 2000));


let lastChild = document.querySelectorAll(`.root>li>ul>li:last-child`);

lastChild.forEach(key => setTimeout(() => key.classList.add(`last`), 2000));

let first;


function setFirstItemClassName(level) {

    let arr = [];
    if (level == 1) {
        first = document.querySelectorAll(`.root>li:first-child`);
        for (let ke of first) {

            arr.push(ke.classList.add(`first-item`));

        }
    }
    if (level == 2) {
        first = document.querySelectorAll(`.root>li>ul>li:first-child`);
        console.log(first);
        for (let ke of first) {

            arr.push(ke.classList.add(`first-item`));

        }
    }
    return arr;

}


setTimeout(() => setFirstItemClassName(1), 2000);