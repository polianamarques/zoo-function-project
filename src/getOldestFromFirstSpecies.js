const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getOldestFromFirstSpecies = (id) => {
  const responsible = data.employees.find((employee) => employee.id === id).responsibleFor[0];
  const animals = data.species.find((animal) => animal.id === responsible).residents;
  
};

module.exports = getOldestFromFirstSpecies;
