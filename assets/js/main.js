import { saveSearch } from './history.js';
import { fetchAPOD } from './api.js';
import { renderAPOD, showState } from './ui.js';
import { startStarfield } from './starfield.js';

startStarfield();

const picker = document.getElementById('datePicker');

const today = new Date().toISOString().split('T')[0];

picker.value = today;
picker.max = today;
picker.min = '1995-06-16';

async function loadAPOD(date){

  try {

    showState('loading');

    const data = await fetchAPOD(date);

    await saveSearch(data);

    renderAPOD(data);

  } catch(error){

    console.error(error);

    showState('error');
  }
}

document
  .getElementById('btnFetch')
  .addEventListener('click', () => {
    loadAPOD(picker.value);
  });

loadAPOD(today);

document
  .getElementById('btnToday')
  .addEventListener('click', () => {

    const today =
      new Date()
      .toISOString()
      .split('T')[0];

    picker.value = today;

    loadAPOD(today);
  });
