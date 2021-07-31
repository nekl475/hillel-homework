result = 0;

answer1 = prompt('Сколько будет 2+2?', '4');
if (answer1 == 4)
    result += 10;

answer2 = prompt('Солнце встает на востоке?', 'да');
if (answer2 == 'да')
    result += 10;

answer3 = prompt('Сколько будет 5 / 0?', 'не делится');
if (answer3 == 'не делится')
    result += 10;

answer4 = prompt('Какого цвета небо?', 'голубое');
if (answer4 == 'голубое')
    result += 10;


answer5 = prompt('Какой правильный ответ на главный вопрос жизни, вселенной и всего такого.', '42');
if (answer5 == 42)
    result += 10;


alert(`Результат: ${result} очков`);