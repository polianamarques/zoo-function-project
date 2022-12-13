const { species } = require('../data/zoo_data');
const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Testa se a função getOpeningHours é definida', () => {
    expect(getOpeningHours).toBeDefined();
  });
  it('Testa se a função getOpeningHours é uma função', () => {
    expect(typeof getOpeningHours).toBe('function');
  });

});
