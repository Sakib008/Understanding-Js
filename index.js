var readlineSync = require('readline-sync');
let question1 = 'What is your Name ? '
// let userName = readlineSync.question(question1)

// console.log('Hi! Mr.'+ userName);
// console.log('Welcome to Our Society lets play the game');

// let question2 = 'Are You Older Then 25 ? ';
// let answer2 = readlineSync.question(question2);
let score = 0;

// if(answer2 === 'Yes' || 'yes'){
//     console.log('you have crossed the road now turn to go into the valley')
//     score = score + 1;
// }else{console.log('Please go older then Come to deal with me')
//     score = score - 1;
// }


// let ques3 =  'How Many players are in a Cricket Team ? ';
// let ans3 = readlineSync.question(ques3);
// console.log('your answer is '+ ans3);
// if(ans3 === 11){
//     console.log('You have answered correct, Now move to the Next ----')
//     console.log('and your score is ' + score)
// }else{
//     console.log('You answered Wrong, go back')
//     score = score - 1 
//     console.log('you loose your marks, and now your score is ' + score)
// }


// function product(num1,num2){
//     let multiply = num1*num2;
//     console.log(multiply);
//     return multiply;
// }
// let firstProduct = product(5,7);
// console.log(firstProduct);


function play(ques,ans){
    let userAns = readlineSync.question(ques);
    
    if(userAns === ans){
        console.log('You gave Right Answer');
    }else{
        console.log('it is wrong answer');
    }
    return
}

let delhiQues = play('Which is the tallest building in asia ? ', 'Qutub Minar');
console.log(delhiQues);

