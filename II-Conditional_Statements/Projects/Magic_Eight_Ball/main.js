let username = 'Jim';
let userQuestion = 'Will Bitcoin make me rich?';
let randomNumber = Math.floor(Math.random() * 8);
let eightBall = '';

username ? console.log(`Hello, ${username}!`) : console.log('Hello!');

/*
switch(randomNumber) {
  case 0:
    eightBall = 'For sure';
    break;
  case 1:
    eightBall = 'The fates decided yes';
    break;
  case 2:
    eightBall = 'Fog-brain makes it unclear';
    break;
  case 3:
    eightBall = 'Come back later';
    break;
  case 4:
    eightBall = 'I wouldn\'t count on it';
    break;
  case 5:
    eightBall = 'I think not';
    break;
  case 6:
    eightBall = 'Your chances are poor';
    break;
  case 7:
    eightBall = 'I have a good feeling about it';
    break;
}
*/

if (randomNumber === 0){
  eightBall = 'For sure';
} else if (randomNumber === 1){
  eightBall = 'The fates decided yes';
} else if (randomNumber === 2){
  eightBall = 'Fog-brain makes it unclear';
} else if (randomNumber === 3){
  eightBall = 'Come back later';
} else if (randomNumber === 4){
  eightBall = 'I wouldn\'t count on it';
} else if (randomNumber === 5){
  eightBall = 'I think not';
} else if (randomNumber === 6){
  eightBall = 'Your chances are poor';
} else if (randomNumber === 7){
  eightBall = 'I have a good feeling about it';
}

if(userQuestion) {
  console.log(`Question: ${userQuestion}`);
  console.log(`Answer: ${eightBall}`);
} else {
  console.log('You have not asked a question');
}