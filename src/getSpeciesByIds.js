const { species } = require('../data/zoo_data');
// array.hofs((elemento) => {})

const getSpeciesByIds = (...ids) => {
  if (ids === undefined) {
    return [];
  }
  const especie = species.filter(({ id }) => ids.includes(id));
  return especie;
};
//  console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce'));

module.exports = getSpeciesByIds;
