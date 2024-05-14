let athleteFinalPosition = 'fourth place';
let the_medal = '';
switch(athleteFinalPosition) {
  case 'first place': 
    the_medal = 'the gold';
    break;
  case 'second place': 
    the_medal = 'the silver';
    break;
  case 'third place': 
    the_medal = 'the bronze';
    break;
  default: 
    the_medal = 'no';
    break;
}
console.log('You get ' + the_medal + ' medal!')