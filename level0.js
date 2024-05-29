
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


/* --------Ques:-9-- Print Your Name 5 times (loop)---- */

for (let i = 0; i < 5; i++) {
    let myName = 'Md Shakib'
    // console.log(myName)
    
}


/* ----Ques:- 10 -- print Star Pattern ----- */

// let n = 5; // number of rows
let string = "";
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
        // string += "*";
    }
    string += "\n"; // newline after each row
}
// console.log(j);

// -------->>>>>>>>2nd Method <<<<<<<------

for(i=1;i<=5;i++){
    const num = i;
    const star = '*'.repeat(num);
    // console.log(star)
}



/* -------Ques: 11-- Print sum of two number and start with 22 -------*/

for(i=0;i<= 9;i++){
    let a = 22;
    a += i;
    // console.log(a)
}

/* ----Ques: 12 -- List 5 Grocery Items and print 1st, 3rd, and last item ----- */

let items =  ['Peanuts','Maida','Aata','Colgate','Toothbrush'] ;

// console.log(items[0])
// console.log(items[3])
// console.log(items[4])


/* ----Ques: 13 -- Print Even No. by using for loop in the list items */

for(i=0; i<items.length; i++){
    let data = items[i];
    // console.log(data);
}


/* ----Ques: 14 -- Use Question List and Function to put together the quiz ---- */

let questionList = [
    {
        question: "What is the Earth's shape?",
        answer: "Oblate"
    },
    {
        question: "What is the third planet from the Sun?",
        answer: "Earth"
    },
    {
        question: "What is the name of Earth's natural satellite?",
        answer: "Moon"
    },
    {
        question: "What gas do plants absorb from the atmosphere?",
        answer: "Carbon"
    },
    {
        question: "What is the largest ocean on Earth?",
        answer: "Pacific"
    },
    {
        question: "What is the hardest natural substance found on Earth?",
        answer: "Diamond"
    },
    {
        question: "What is the primary component of Earth's atmosphere?",
        answer: "Nitrogen"
    },
    {
        question: "What force keeps us anchored to the Earth?",
        answer: "Gravity"
    },
    {
        question: "What is the most abundant element in Earth's crust?",
        answer: "Oxygen"
    },
    {
        question: "What is the layer of gases surrounding Earth called?",
        answer: "Atmosphere"
    }
];


function askQuestion(ques,ans){
let userAns = readlineSync.question(ques);
if(userAns=== ans){
    console.log('          ');
    console.log('You gave Right Answer');
    score += 1;
    console.log('Current Score : ' + score);
    console.log('          ');
    console.log('-----------------------------------------------')
}else{
    console.log('You are Wrong buddy');
    console.log('Current Score : ' + score);
    console.log('          ');
    console.log('-----------------------------------------------')
}
return
}
for(i=0;i<questionList.length;i++){
    const currentQuestion = questionList[i].question;
    const currentAnswer = questionList[i].answer;
    askQuestion(currentQuestion,currentAnswer)
}

/* ----------2nd Way to Write a Loop ---------*/

// for(i=0;i<questionList.length;i++){
//     const currentQuestion = questionList[i];
//     askQuestion(currentQuestion.question,currentQuestion.answer)
// }

console.log('Final Score : '+ score)
