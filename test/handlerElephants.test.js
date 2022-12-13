const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Testa se a função handlerElephants é uma função', () => {
    expect(typeof handlerElephants).toBe('function');
  });
  it('Testa se o retorno da função quando chamada sem parametros ', () => {
    expect(handlerElephants()).toBe(undefined);
  });
  it('Testa o retorno da quantidade de elefantes', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  it('Testa se o retorno da função é um array com a relação dos nomes de todos os elefantes', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });
  it('Testa se a função retorna a média de idade dos elefantes', () => {
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5);
  });
  it('Testa se a função retorna a localização dos elefantes dentro do Zoológico', () => {
    expect(handlerElephants('location')).toBe('NW');
  });
  it('Testa se a função retorna a popularidade dos elefantes', () => {
    expect(handlerElephants('popularity')).toBe(5);
  });
  it('Testa se a função retorna um array com a relação de dias em que é possível visitar os elefantes', () => {
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
  });
});
