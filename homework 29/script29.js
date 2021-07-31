let block = document.querySelector(`.block`);

let step = 10;

console.dir(block);
const activateElement = element => {
    document.querySelector(`p`).remove(`p`)
    document.querySelector(`.active`) && document.querySelector(`.active`).classList.remove(`active`);
    element.classList.add(`active`);
};

block.onmousedown = () => activateElement(block);


const keyboardEvents = {
    39: element => element.style.left = !element.style.left ? `${step}px` : `${parseInt(element.style.left)+step}px`,
    37: element => element.style.left = !element.style.left ? `-${step}px` : `${parseInt(element.style.left)-step}px`,
    40: element => element.style.top = !element.style.top ? `${step}px` : `${parseInt(element.style.top)+step}px`,
    38: element => element.style.top = !element.style.top ? `-${step}px` : `${parseInt(element.style.top)-step}px`,
    32: element => {

        if (element.offsetTop < 100) {
            element.innerHTML += `<p>БЭМС</p>`;
            element.style.top = `${parseInt(element.style.top)+(step*2)}px`;
            setTimeout(() => document.querySelector(`p`).remove(`p`), 2000);
        } else {
            element.classList.add(`key`);
            element.style.top = !element.style.top ? `-100px` : `${parseInt(element.style.top)-100}px`;
            setTimeout(() => element.style.top = !element.style.top ? `100px` : `${parseInt(element.style.top)+100}px`, 500);
            setTimeout(() => document.querySelector(`.key`).classList.remove(`key`), 1000);
        }
    },
    17: element => {
        element.classList.add(`ctr`);
        setTimeout(() => document.querySelector(`.ctr`).classList.remove(`ctr`), 1000);
    }
};

document.onkeydown = e => {

    if (block.offsetTop < 10) {
        block.innerHTML += `<p>БЭМС</p>`;

        block.style.top = `${parseInt(block.style.top)+(step*2)}px`;

        setTimeout(() => document.querySelector(`p`).remove(`p`), 2000);

    } else if (block.offsetTop > (window.innerHeight - block.offsetHeight)) {
        block.innerHTML += `<p>БЭМС</p>`;
        block.style.top = `${parseInt(block.style.top)-(step*2)-20}px`;

        setTimeout(() => document.querySelector(`p`).remove(`p`), 2000);

    } else if (block.offsetLeft > (window.innerWidth - block.offsetWidth)) {
        block.innerHTML += `<p>БЭМС</p>`;
        block.style.left = `${parseInt(block.style.left)-(step*2)}px`;

        setTimeout(() => document.querySelector(`p`).remove(`p`), 2000);

    } else if (block.offsetLeft < 10) {
        block.innerHTML += `<p>БЭМС</p>`;

        block.style.left = `${parseInt(block.style.left)+(step*2)}px`;

        setTimeout(() => document.querySelector(`p`).remove(`p`), 2000);


    } else {
        keyboardEvents[e.keyCode] && keyboardEvents[e.keyCode](document.querySelector(`.active`));
    }


};