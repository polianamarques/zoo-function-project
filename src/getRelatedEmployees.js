const { employees } = require('../data/zoo_data');

const isManager = (id) => employees.some(({ managers }) => managers.includes(id));

const getRelatedEmployees = (managerId) => {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const manager = employees.filter(({ managers }) => managers.includes(managerId));
  return manager.map((name) => `${name.firstName} ${name.lastName}`);
};
// console.log(getRelatedEmployees('0e7b460e-acf4-4e17-bcb3-ee472265db83'));
module.exports = { isManager, getRelatedEmployees };
