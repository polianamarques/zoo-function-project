const data = require('../data/zoo_data');

const person = (id) => data.employees.find((employees) => employees.id === id).responsibleFor[0];
const animals = (responsibleId) => data.species.find((animal) => animal.id === person).residents;
const oldest = (animal) => animals.sort((a, b) => b.age - a.age)[0];

const getOldestFromFirstSpecies = (id) => {
  const $animal = person(id);
  const $species = animals($animal);
  const $oldest = oldest($species);
  return Object.values($oldest);
};
console.log(getOldestFromFirstSpecies('78460a91-f4da-4dea-a469-86fd2b8ccc84'));

module.exports = getOldestFromFirstSpecies;
