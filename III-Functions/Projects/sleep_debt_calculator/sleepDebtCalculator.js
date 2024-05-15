const getSleepHours = day => {
  switch (day) {
    case 'sunday':
      return 8
      break;
    case 'monday':
      return 7;
      break;
    case 'tuesday':
      return 8;
      break;
    case 'wednesday':
      return 7;
      break;
    case 'thursday':
      return 6
      break;
    case 'friday':
      return 8
      break;
    case 'saturday':
      return 7
      break;
  }
};

/*
const getActualSleepHours = () => {
  let totalHours = 0;
  for (let day of [ 'sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday' ]) {
    totalHours += getSleepHours(day);
  }
  return totalHours;
}
*/
const getActualSleepHours = () => getSleepHours('sunday') + getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday');

const getIdealSleepHours = (idealHours = 8) => idealHours * 7;

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours(7.5);

  if (actualSleepHours === idealSleepHours) {
    console.log('You got just the right amount of sleep.')
  } else if (actualSleepHours > idealSleepHours) {
    let hoursOver = actualSleepHours - idealSleepHours;
    console.log(`You got ${hoursOver} more hour(s) sleep than you needed.`);
  } else if (actualSleepHours < idealSleepHours) {
    let hoursUnder = idealSleepHours - actualSleepHours;
    console.log(`You're ${hoursUnder} hour(s) behind on sleep. Consider getting some rest.`);
  }
}

calculateSleepDebt();