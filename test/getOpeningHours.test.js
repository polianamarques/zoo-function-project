const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Testa se a função getOpeningHours é definida', () => {
    expect(getOpeningHours).toBeDefined();
  });
  it('Testa se a função getOpeningHours é uma função', () => {
    expect(typeof getOpeningHours).toBe('function');
  });
  it('Testa se a  função sem argumentos retorna um objeto', () => {
    expect(getOpeningHours()).toEqual({
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    });
  });
});
