alert('Create your account');

do {
    xname = prompt('Your Name (must be at least six characters, e.g. Anna Ivanova)');

} while (xname.length < 6);
do {
    nick = prompt('Nick Name (must be at least six characters, without whitespaces and must begin with a letter, e.g. annaivanova');

} while (nick.length < 6 || !isNaN(+nick[0]) || nick.indexOf(' ') !== -1);
do {
    email = prompt('Email Address (must be at least six characters, without whitespaces, begin with a letter and contains @, e.g. annaivanova@gmail.com)');

} while (email.length < 6 || !isNaN(+email[0]) || email.indexOf(' ') !== -1 || email.indexOf('@') === -1);
do {
    birthData = +prompt('Year of Birth (must be a number, e.g. 1990)');

    year = new Date().getFullYear();
    age = year - birthData;

} while (isNaN(birthData));


document.write('<ul>');
document.write('<li> Your Name: ' + xname + ' </li>');
document.write('<li>Nick Name:' + nick + '</li >');
document.write('<li> Email Address: <a href ="mailto:' + email + ' ">' + email + '</a></li>');
document.write('<li> Age: ' + age + ' </li> ');
document.write('</ul>');