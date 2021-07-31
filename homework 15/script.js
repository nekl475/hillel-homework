const sports = [
    ['🤺', 'fencing'],
    ['⛸', 'figure skating'],
    ['⛷', 'skier'],
    ['🏂', 'snowboarder'],
    ['🏌', 'golfing'],
    ['🚣', 'rowing boat'],
    ['🏊', 'swimming'],
    ['🤸', 'gymnastics'],
    ['🤾', 'handball']
];

const winners = [
    ['fencing', 'gold', 'fr'],
    ['fencing', 'silver', 'it'],
    ['fencing', 'bronze', 'us'],

    ['figure skating', 'gold', 'ca'],
    ['figure skating', 'silver', 'ru'],
    ['figure skating', 'bronze', 'us'],

    ['skier', 'gold', 'no'],
    ['skier', 'silver', 'ru'],
    ['skier', 'bronze', 'fr'],

    ['snowboarder', 'gold', 'us'],
    ['snowboarder', 'silver', 'jp'],
    ['snowboarder', 'bronze', 'au'],

    ['golfing', 'gold', 'gb'],
    ['golfing', 'silver', 'se'],
    ['golfing', 'bronze', 'us'],

    ['rowing boat', 'gold', 'us'],
    ['rowing boat', 'silver', 'gb'],
    ['rowing boat', 'bronze', 'ro'],

    ['swimming', 'gold', 'us'],
    ['swimming', 'silver', 'gb'],
    ['swimming', 'bronze', 'au'],

    ['gymnastics', 'gold', 'ru'],
    ['gymnastics', 'silver', 'ru'],
    ['gymnastics', 'bronze', 'ua'],

    ['handball', 'gold', 'dk'],
    ['handball', 'silver', 'fr'],
    ['handball', 'bronze', 'de'],
];

const olympic = ['🔵', '⚫', '🔴', '🟡', '🟢'];

const medals = [
    ['🥇', 'gold'],
    ['🥈', 'silver'],
    ['🥉', 'bronze'],
];

const continents = [
    ['fr', 'Europe'],
    ['it', 'Europe'],
    ['us', 'The Americas'],
    ['ca', 'The Americas'],
    ['ru', 'Europe'],
    ['no', 'Europe'],
    ['jp', 'Asia'],
    ['au', 'Oceania'],
    ['gb', 'Europe'],
    ['se', 'Europe'],
    ['ro', 'Europe'],
    ['ua', 'Europe'],
    ['dk', 'Europe'],
    ['de', 'Europe']
];

const flags = [
    ['fr', '🇫🇷'],
    ['it', '🇮🇹'],
    ['us', '🇺🇸'],
    ['ca', '🇨🇦'],
    ['ru', '🇷🇺'],
    ['no', '🇳🇴'],
    ['jp', '🇯🇵'],
    ['au', '🇦🇺'],
    ['gb', '🇬🇧'],
    ['se', '🇸🇪'],
    ['ro', '🇷🇴'],
    ['ua', '🇺🇦'],
    ['dk', '🇩🇰'],
    ['de', '🇩🇪']
];


function getMedal(medal) {
    let medalWin;
    for (let i = 0; i < medals.length; i++) {
        if (medals[i][1] === medal)
            medalWin = medals[i][0];

    }
    return medalWin;
}


function getFlag(flag) {
    let flagWin = flags.filter(function(el) {
        return el[0] === flag;
    });


    return flagWin[0][1];

}

function getContinent(country) {
    let winnerContinent = continents.filter(function(item) {
        return item[0] === country;
    });
    return winnerContinent[0][1];
}

let head = olympic
    .map(function(item) {
        return `<th>${item}</th>`;
    }).join('');



let line = sports.map(function(sport) {
    let Europe = [],
        Africa = [],
        Americas = [],
        Asia = [],
        Oceania = [];

    winners
        .filter(function(winner) {
            return winner[0] === sport[1];
        })
        .map(function(winner) {
            winner.push(getContinent(winner[2]));
            return winner;
        })
        .map(function(winner) {
            winner.push(`<div style="background-color:${winner[1]}">${getMedal(winner[1])} - ${getFlag(winner[2])}</div>`);
            return winner;
        })
        .forEach(function(winner) {
            let winnerContinent = winner[3];
            switch (winnerContinent) {
                case 'Europe':
                    Europe.push(winner[4]);
                    break;
                case 'Africa':
                    Africa.push(winner[4]);
                    break;
                case 'The Americas':
                    Americas.push(winner[4]);
                    break;
                case 'Asia':
                    Asia.push(winner[4]);
                    break;
                case 'Oceania':
                    Oceania.push(winner[4]);
                    break;
            }
        });

    return `<tr> 
            <td>${sport[0]}</td>
            <td>${Europe.join('')}</td>
            <td>${Africa.join('')}</td>
            <td>${Americas.join('')}</td>
            <td>${Asia.join('')}</td>
            <td>${Oceania.join('')}</td>
            </tr>`;
}).join('');

document.write(`  <table class ="sport__table">
                <thead>
                <tr>
                <th> </th> 
                ${head}
                </tr> 
                </thead> 
                <tbody> 
                <tr> ${line}</tr>
                </tbody>
                </table> `);