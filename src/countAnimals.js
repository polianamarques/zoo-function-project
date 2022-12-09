const { species } = require('../data/zoo_data');

const countAnimals = (animal) => {
  if (!animal) {
    return species.reduce((acc, { name, residents }) => {
      acc[name] = residents.length;
      return acc;
    }, {});
  }
  const { residents } = species.find(({ name }) => name === animal.species);
  if (animal.sex) {
    const filter = residents.filter((resident) => resident.sex === animal.sex);
    return filter.length;
  }
  return residents.length;
};
// console.log(countAnimals({ species: 'penguins', sex: 'male' }));

module.exports = countAnimals;
