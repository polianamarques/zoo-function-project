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

const getSchedule = (scheduleTarget) => {
  // seu código aqui
};

module.exports = getSchedule;
