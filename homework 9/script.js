hero = ['Ivan'];
native = ['York', 'Of'];
destination = ['Poltava', 'In'];
rainbow = [];

for (i = 0; i < destination.length; i++) {
    rainbow[i] = destination[i];
}


rainbow.push(native[0]);
rainbow.push(native[1]);
rainbow.push(hero[0]);
rainbow.reverse();
rainbow.shift();
rainbow.unshift('Richard');
rainbow.splice(3, 2, 'Gave', 'Battle');
rainbow.push('In');
rainbow.push('Vain');

document.write(rainbow.join('&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;'));