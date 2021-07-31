var users = [
    ["john", "red", 5, ["ball", "book", "pen"]],
    ["becky", "blue", 10, ["tape", "backpack", "pen"]],
    ["susy", "red", 55, ["ball", "eraser", "pen"]],
    ["tyson", "green", 1, ["book", "pen"]],
];

//1
let uName = [];
users.forEach(function(item) {
    uName.push(`${item[0]}!`);
    return uName;
});

console.log(uName);

//2
let AnName = [];
users.map(function(item) {
    AnName.push(`${item[0]}?`);
    return AnName;
});
console.log(AnName);


//3, 4
let redUser = users.filter(function(item) {
    return item[1] === "red";
});
let sum = redUser.reduce(function(sum, item) {
    sum += item[2];
    return sum;
}, 0);

let table = redUser.map(function(item) {
    return `
    <tbody>
    
    <tr><td>${item[0]}</td>
    <td>${item[1]}</td>
    <td>${item[2]}</td>
   <td>${item[3]}</td></tr>
    </tbody>
    `;
}).join('');

document.write(`<table border="1px">
<thead><tr><td>Username:</td>
    <td>Team:</td><td>Score:</td>
    <td>Items:</td></tr></thead>
${table} 
 
<tr><tfoot>
<td colspan="4">Final summ:${sum}</td>
</tfoot>
</tr>
</table>`);