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
  it('Testa a função com os parametros Monday e 09:00-AM', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toBe('The zoo is closed');
  });
  it('Testa a função com os parametros Tuesday e 09:00-AM', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toBe('The zoo is open');
  });
  it('Testa a função com os parametros Wednesday e 09:00-AM', () => {
    expect(getOpeningHours('Wednesday', '09:00-PM')).toBe('The zoo is closed');
  });
  it('Testa a função com erros', () => {
    expect(() => getOpeningHours('Thu', '09:00-PM')).toThrowError('The day must be valid. Example: Monday');
  });
  it('Testa a função com erros', () => {
    expect(() => getOpeningHours('Friday', '09:00-ZM')).toThrowError('The abbreviation must be \'AM\' or \'PM\'');
  });
});
