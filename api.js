const NASA_KEY = 'DEMO_KEY';

export async function fetchAPOD(date) {

  const url =
    `https://api.nasa.gov/planetary/apod?api_key=${NASA_KEY}&date=${date}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Erro HTTP: ${response.status}`);
  }

  return await response.json();
}