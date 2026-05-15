import { fetchAPOD } from '../js/api.js';

test('Deve retornar dados da NASA', async () => {

  const data = await fetchAPOD('2024-01-01');

  expect(data).toHaveProperty('title');

  expect(data).toHaveProperty('url');

});