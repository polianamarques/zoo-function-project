const { species } = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => {
  const name = species.find((specie) => specie.name === animal);
  const result = name.residents.every((animalAge) => animalAge.age > age);
  return result;
};
// console.log(getAnimalsOlderThan('snakes', 4));
module.exports = getAnimalsOlderThan;
