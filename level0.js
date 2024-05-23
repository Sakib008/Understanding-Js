
/* ----------Ques-1:-- Write a program to console name on output ------- */

// console.log('My name is Mohammad Sakib');


/* -------Ques-2:-- Read Input From User, Output This Name. Use ReadlineSycn() for this. */

let readlineSync = require('readline-sync')

// let userQues = 'What is your stream in 12th Class? '
// let userName = readlineSync.question(userQues);
// console.log(userName + ' is Your background therefore you should choose IAS and Civil Services.');

/* ------ Ques-3:-- Welcome Your User */

// let userName = readlineSync.question('What is Your Name ? ')
// let welcome = 'Welcome Mr/Ms. ';
// console.log(userName);
// console.log(welcome + userName+', Come to Join Us.');


/* ------Ques-4:- Print write/wronge if AGE greater the 25. (learn Branching of Code) */

// let age = readlineSync.question('What is Your Age? = ');

// if(age >= 25){
//     console.log('Yay! you are Right')
// }else{
//     console.log('Oh!! you are Wrong');
// }


/* -----Ques-5:- Increment Score if Write Answer */

// let score = 0;
// let city = readlineSync.question('In Which city you live ? ')
// if(city ==='Delhi'){
//     console.log('Yah! you are right')
//     score = score +1;
// }else{
//     console.log('Oh!! You are Wrong')
// }
// console.log('Your score is '+ score);



/* -----Ques-7:- Function to add Two Number */
function add(num1,num2){
    return num1+ num2 ;
}
let addNum = add(8,3);
// console.log(addNum);


/* ------Ques-8:- Function to ask Question and Answer in there */ 

let score = 0;
// doQues('What is you goal in future to be ? ', 'Doctor')


// ---------====>> Arrow Function

// const askQuestion = (question,answer) =>{
//     const ques = readlineSync.question(question ?? 'What is your date of birth');
//     if(ques === answer){
//         console.log('Yah! you are right')
//         score = score +1;
//         console.log('your Score is : '+ score)
//     }else{
//         console.log('You are Wrong')
//     }
//     return ;
// }
// askQuestion('question is a best thing ' ,'24 apr 2024');


// ====----<<>> Normal Function

// function doQues(question,answer){
//     const ques = readlineSync.question(question ?? 'What is your date of birth');
//     if(ques === answer){
//         console.log('Yah! you are right')
//         score = score +1;
//         console.log('your Score is : '+ score)
//     }else{
//         console.log('You are Wrong')
//     }
//     return ;
// }
