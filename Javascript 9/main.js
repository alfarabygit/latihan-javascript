//string di javascript
var greeting = "Hello guys!";
document.write(greeting);

//single or double quotes string
let name1 = "alby";
let name2 = "Indra";

console.log(name1);
console.log(name2);

//concatenate string
var str1 = "Hello";
var str2 = "Apa kabar guys!";
var sentence = str1 + " " + str2;
document.write(sentence);

//concatenate string with input string
let username = window.prompt("Welcome to My Portfolio, May i ask your name?"); //fungsi prompt utk menampilkan dialog ketika mneginputkan data
let name = "Nice to meet you " + username + " ! " + "I hope you're enjoying";
alert(name);
//escaping string
let escape1 = 'She is called "Fela"';
let escape2 = 'She is called "Punipun"';
let escape3 = "Escaping backlash\\";

console.log(escape1);
console.log(escape2);
console.log(escape3);
