const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Testa se a função handlerElephants é uma função', () => {
    expect(typeof handlerElephants).toBe('function');
  });
});
