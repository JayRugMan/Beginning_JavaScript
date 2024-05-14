let temp = 100;
let language = 'Spanish';
let implement = '';
let output = '';

if (temp < 50) {
  (language === 'English') ? implement = 'a coat' : implement = 'un abrigo';
} else if (temp < 60) {
  (language === 'English') ? implement = 'a jacket' : implement = 'una chaqueta';
} else if (temp < 70) {
  (language === 'English') ? implement = 'long sleeves' : implement = 'mangas largas';
} else if (temp < 90) {
  (language === 'English') ? implement = 'shorts' : implement = 'pantalones cortos';
} else if (temp < 100) {
  (language === 'English') ? implement = 'a bathing suit' : implement = 'traje de baño';
} else if (temp >= 100) {
  (language === 'English') ? implement = 'nothing but sunscreen' : implement = 'nada más que protector solar';
}

switch(language) {
  case 'English':
    output = `Wear ${implement}.`;
    break;
  case 'Spanish':
    (temp >= 100) ? output = `No usar ${implement}.` : output = `Usar ${implement}.`;
    break;
  default:
    output = 'Ah, just go naked'
    break;
}

console.log(output);