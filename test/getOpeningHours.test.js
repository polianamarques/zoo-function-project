const { species } = require('../data/zoo_data');
const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Testa se a função getOpeningHours é definida', () => {
    expect(getOpeningHours).toBeDefined();
  });
  it('Testa se a função getOpeningHours é uma função', () => {
    expect(typeof getOpeningHours).toBe('function');
  });
//   it('Testa se o array Species é um array', () => {
//     expect({ species }).ToEqual({ species }.isArray(true));
//   });
//   it('Testa se o objeto species tem a propriedade name', () => {
//     expect(species).toHaveProperty('name');
//   });
//   it('Testa se o objeto species tem a propriedade age', () => {
//     expect(species).toHaveProperty('age');
//   });
});
