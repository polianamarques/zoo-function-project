const { prices } = require('../data/zoo_data');

const countEntrants = (entrants) => {
  const childs = entrants.filter((entrant) => entrant.age < 18).length;
  const adults = entrants.filter((entrant) => entrant.age >= 18 && entrant.age < 50).length;
  const seniors = entrants.filter((entrant) => entrant.age >= 50).length;
  return {
    child: childs,
    adult: adults,
    senior: seniors,
  };
};

const calculateEntry = (entrants) => {
  if (entrants === undefined || !entrants.length) {
    return 0;
  }
  const { child, adult, senior } = countEntrants(entrants);
  const value = prices.child * child + prices.adult * adult + prices.senior * senior;
  return value;
};
// console.log(calculateEntry([
// { name:  'Lara Carvalho', age:  5 },
// { name:  'Frederico Moreira', age:  5 },
// { name:  'Pedro Henrique Carvalho', age:  5 },
// { name:  'Maria Costa', age:  18 },
// { name:  'Núbia Souza', age:  18 },
// { name:  'Carlos Nogueira', age:  50 },
// ]));
module.exports = { calculateEntry, countEntrants };
