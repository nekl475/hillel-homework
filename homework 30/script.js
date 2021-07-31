let menu = [{
        tab: 'Платежі',
        title: 'Ну де ще ви бачили безкоштовні перекази?',
        description: 'Поповнення картки monobank — безкоштовно! А далі поповнюйте мобільний, сплачуйте комунальні та інші послуги без будь-якої комісії. Навіть за рахунок кредитних коштів! Переказуйте гроші своїм контактам за один клік — це простіше, ніж ви можете собі уявити',
        icon: 'payment'
    },
    {
        tab: 'Виписка',
        title: 'Усі ваші витрати на кінчиках пальців',
        description: 'Завжди хотіли перевірити, який відсоток ваших витрат припадає на нестримні веселощі? Тепер це просто. Користуйтеся карткою monobank, і ви завжди зможете бачити свої витрати в красивому й структурованому вигляді',
        icon: 'extract'
    },
    {
        tab: 'Налаштування картки',
        title: 'Забудьте все, що ви знали про банкінг',
        description: 'Установлюйте самостійно будь-які ліміти, зокрема для запиту PIN-коду, коли купуєте. Не можете знайти картку? Заблокуйте її на якийсь час, далі від гріха. Змінюйте ПІН просто в додатку, без походів до банкомата',
        icon: 'settings'
    }
];

class Menu {
    constructor(data) {
        this.title = data.title;
        this.description = data.description;
        this.icon = data.icon;
    }
    render() {
        let ideny = this.icon == 'payment' ? `firstpage` : ``;
        return ` <div class="tab_mobile-items ${ideny}">
                <div class="tab_icon ${this.icon} "><img src="icons/${this.icon}.svg" alt="${this.icon}"></div>
                <h2 class="tab_title">${this.title}</h2>
                <p class="tab_decsription">${this.description}</p></div>`;
    }
}

let menuClass = menu.map(item => {
    return new Menu(item);
}).map(item => {
    return item;
}).map(item => {
    return item.render();
}).join('');

let menuTab = menu.map((item, index) => {
    iden = index == 0 ? `first` : ``;
    let str = `<div class="tab_link ${iden}">${item.tab}</div>`;
    return str;
}).join('');


const card = document.querySelector(`.tab_mobile`),
    tablet = document.querySelector(`.tab_panel`);

card.innerHTML = menuClass;
tablet.innerHTML = menuTab;

const link = document.querySelectorAll(`.tab_link`),
    first = document.querySelector(`.first`),
    firstpage = document.querySelector(`.firstpage`),
    cardLine = document.querySelectorAll(`.tab_mobile-items`);

cardLines = [...cardLine];
console.log(cardLines[0]);


first.classList.add(`active`);
firstpage.classList.add(`active_tab`);
link.forEach((item, index) => {

    item.addEventListener('click', e => {

        document.querySelector(`.active`) && document.querySelector(`.active`).classList.remove(`active`);
        e.target.classList.add(`active`);
        document.querySelector(`.active_tab`) && document.querySelector(`.active_tab`).classList.remove(`active_tab`);
        cardLines[index].classList.add(`active_tab`);
        console.log(index);
    });

});