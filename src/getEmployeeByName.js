const { employees } = require('../data/zoo_data');

const getEmployeeByName = (employeeName) => {
  if (employeeName === undefined) {
    return {};
  }
  const informations = employees.find(({ firstName, lastName }) => employeeName === firstName
  || employeeName === lastName);
  return informations;
};
console.log(getEmployeeByName('Burl'));

module.exports = getEmployeeByName;
