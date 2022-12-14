const { employees } = require('../data/zoo_data');

const isManager = (id) => {
  employees.some(({ managers }) => managers.includes(id));
};

const getRelatedEmployees = (managerId) => {
  // seu código aqui
};
module.exports = { isManager, getRelatedEmployees };
