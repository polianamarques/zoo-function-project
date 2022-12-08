const {species} = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => {
  if (ids === undefined) {
    return [];
  }
  const especie = species.filter(({ id }) => ids.includes(id));
  return especie;
};
 

module.exports = getSpeciesByIds;
