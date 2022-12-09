const { species } = require('../data/zoo_data');

const countAnimals = (animal) => {
  if (!animal) {
    return species.reduce((acc, { name, residents }) => {
      acc[name] = residents.length;
      return acc;
    }, {});
  }
  const { residents } = species.find(({ name }) => name === animal.species);
};
// console.log(countAnimals());
module.exports = countAnimals;
