sports = [
    ['skier', '⛷'],
    ['snowboarder', '🏂'],
    ['apple', '🍎'],
    ['hockey', '🏒'],
    ['ice skate', '⛸'],
    ['swimmer', '🏊'],
    ['surfer', '🏄‍'],
    ['watermelon', '🍉'],
    ['lemon', '🍋'],
    ['rowboat', '🚣'],
    ['bicyclist', '🚴‍']
];

winter_sports = sports.slice(0, 5);
summer_sports = sports.slice(5, sports.length);

fruit1 = winter_sports.slice(2, 3);
fruit2 = summer_sports.slice(2, 4);
fruits = fruit1.concat(fruit2);
winter_sports.splice(1, 2);
summer_sports.splice(2, 2);

console.log('*** Winter sports ***');
for (i = 0; i < winter_sports.length; i++) {
    winter_sports0 = winter_sports[i].join(': ');
    console.log(winter_sports0);
}
console.log('*** Summer sports ***');
for (i = 0; i < summer_sports.length; i++) {
    summer_sports0 = summer_sports[i].join(': ');
    console.log(summer_sports0);
}
console.log('*** Fruits ***');
for (i = 0; i < fruits.length; i++) {
    fruits0 = fruits[i].join(': ');
    console.log(fruits0);
}