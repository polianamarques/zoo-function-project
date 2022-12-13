const { employees, species } = require('../data/zoo_data');

const getOldestFromFirstSpecies = (id) => {
  const person = employees.find((specie) => specie.id === id).responsibleFor[0];
  const animal = species.find((specie) => specie.id === person).residents;
  const result = animal.reduce((acc, specie) => {
    if (acc.age > specie.age) {
      return acc;
    }
    return specie;
  }, 0);
  return [result.name, result.sex, result.age];
};

console.log(getOldestFromFirstSpecies('9e7d4524-363c-416a-8759-8aa7e50c0992'));

module.exports = getOldestFromFirstSpecies;
