const data = require('../data/zoo_data');

const daysOfTheWeek = (scheduleTarget) => {
  const animal = data.species.find(({ name }) => name.includes(scheduleTarget));
  const { availability } = animal;
  return availability;
};
// console.log(daysOfTheWeek('lions'));

const animalOfTheWeek = (dayOfTheWeek) => {
  const animalsAvailable = [];
  const available = data.species.filter(({ availability }) => availability.includes(dayOfTheWeek));
  available.forEach(({ name }) => {
    animalsAvailable.push(name);
  });
  return animalsAvailable;
};
// console.log(animalOfTheWeek('Tuesday'));

const officeHours = (day) => {
  const { hours } = data;
  const hoursOfWeek = hours[day];
  const object = {
    [day]: {
      officeHour: `Open from ${hoursOfWeek.open}am until ${hoursOfWeek.close}pm`,
      exhibition: animalOfTheWeek(day),

    },
  };
  return object;
};
// console.log(officeHours('Tuesday'));

const monday = {
  Monday: {
    officeHour: 'Closed',
    exhibition: 'The zoo will be closed',
  },
};

// A função, caso receba parâmetros que não sejam nem um animal e nem um dia, retorna os horários para cada dia e quais animais estarão disponíveis;

const schedule = Object.assign(
  officeHours('Tuesday'),
  officeHours('Wednesday'),
  officeHours('Thursday'),
  officeHours('Friday'),
  officeHours('Saturday'),
  officeHours('Sunday'),
  monday,
);
const getSchedule = (scheduleTarget) => {
  const areAnimal = data.species.some(({ name }) => name === scheduleTarget);
  const { hours } = data;
  const week = Object.keys(hours).includes(scheduleTarget);
  if (areAnimal === true) {
    return daysOfTheWeek(scheduleTarget);
  }

};
// console.log(getSchedule('Thursday'));
module.exports = getSchedule;
