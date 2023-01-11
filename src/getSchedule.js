const data = require('../data/zoo_data');

const daysOfTheWeek = (scheduleTarget) => {
  const animal = data.species.find(({ name }) => name.includes(scheduleTarget));
  const { availability } = animal;
  return availability;
};


const getSchedule = (scheduleTarget) => {
  // seu código aqui
};

module.exports = getSchedule;
