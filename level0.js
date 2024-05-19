
/* ----------Ques-1:-- Write a program to console name on output ------- */

// console.log('My name is Mohammad Sakib');


/* -------Ques-2:-- Read Input From User, Output This Name. Use ReadlineSycn() for this. */

let readlineSync = require('readline-sync')

// let userQues = 'What is your stream in 12th Class? '
// let userName = readlineSync.question(userQues);
// console.log(userName + ' is Your background therefore you should choose IAS and Civil Services.');

/* ------ Ques-3:-- Welcome Your User */

let userName = readlineSync.question('What is Your Name ? ')
let welcome = 'Welcome Mr/Ms. ';
console.log(userName);
console.log(welcome + userName+', Come to Join Us.');
