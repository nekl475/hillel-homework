let amount = 100;
let monday = [
    ['Write a tutorial', 180],
    ['Some web development', 120]
];
let tuesday = [
    ['Keep writing that tutorial', 240],
    ['Some more web development', 180],
    ['A whole lot of nothing', 240]
];
let tasks = [monday, tuesday];

function getTask(day) {
    let dayHour = day.map(function(element) {
        element[1] /= 60;
        return element;

    }).filter(function(element) {
        if (element[1] >= 2)
            return element;
    }).map(function(item) {
        let price = item[1] * amount;
        item.push(price);
        return item;
    }).map(function(item) {
        return `<table> <tr>
        <td>Task name:${item[0]}</td></tr>
        <tr><td>Taks duration: ${item[1]} hours</td></tr>
        <tr><td>Task amount: $${item[2]}</td></tr>
        </tr></table>`;
    });
    return dayHour;
}

let dayTask = tasks.map(function(item) {
    let task = getTask(item);
    return task.join('-----');

});

document.write(dayTask.join('-----'));