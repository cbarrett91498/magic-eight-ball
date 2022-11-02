// The user can enter there own name 
const  userName =  'Avary';

// greeting the user by name if one is entered  
if(userName !== ''){
    console.log(`Hello ${userName}`)
}
else{
    console.log('Hello!')
}

// this is the users question 
const userQuestion = 'Will it rain tomorrow?'

console.log(`${userName} question is: ${userQuestion}`)

const randomNumber = Math.floor(Math.random() * 8);

let eightBall = '';

// answers for the question 

if(randomNumber === 0){
    eightBall = 'It is certain'
}
else if(randomNumber === 1){
    eightBall = 'It is decidedly so'
}
else if(randomNumber === 2){
    eightBall = 'Reply hazy try again'
}
else if(randomNumber === 3){
    eightBall = 'Cannot predict now'
}
else if(randomNumber === 4){
    eightBall = 'Do not count on it'
}
else if(randomNumber === 5){
    eightBall = 'My sources say no'
}
else if(randomNumber === 6){
    eightBall = 'Outlook not so good'
}
else if(randomNumber === 7){
    eightBall = 'Signs point to yes'
}

// logging the answer to the console 
console.log(`your answer is: ${eightBall}`);
