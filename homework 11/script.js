suitCase = ['clubs', 'spades', 'diamonds', 'hearts'];

for (i = 0, suitCard = []; i < 4; i++) {
    suit = `<img src="images/${suitCase[i]}.svg" height ='15px' alt='${suitCase[i]}'></img>`;
    suitCard.push(suit);
}
for (i = 2, cardAll = []; i <= 14; i++) {
    for (j = 0, cardsArr = []; j < 4; j++) {

        switch (i) {
            case 11:
                cNumber = `<div class="card__info">J${suitCard[j]}</div>`;
                cardHeart = `<img class="person" src="images/jack.svg" height ="50px" alt="${suitCase[j]}" >`;
                break;
            case 12:
                cNumber = `<div class="card__info">Q${suitCard[j]}</div>`;
                cardHeart = `<img class="person" src="images/queen.svg" height ="50px" alt="${suitCase[j]}">`;
                break;
            case 13:
                cNumber = `<div class="card__info">K${suitCard[j]}</div>`;
                cardHeart = `<img class="person" src="images/king.svg" height ="50px" alt="${suitCase[j]}">`;
                break;
            case 14:
                cNumber = `<div class="card__info">T${suitCard[j]}</div>`;
                cardHeart = `<img class="person" src="images/${suitCase[j]}.svg" height ="50px" alt="${suitCase[j]}">`;
                break;
            default:
                cNumber = `<div class="card__info">${i}${suitCard[j]}</div>`;
                cardHeart = ``;
        }
        card = `<div class="card">${cNumber}${cardHeart}${cNumber}</div>`;
        cardsArr.push(card);

    }
    cardAll.push(cardsArr.join(''));
}

document.write(`<div class="wrapper">${cardAll.join('')} </div>`);