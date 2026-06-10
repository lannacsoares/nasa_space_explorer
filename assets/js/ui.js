import { formatDate } from './utils.js';

export function showState(state){

  document.getElementById('loading')
    .classList.toggle('visible', state === 'loading');

  document.getElementById('errorPanel')
    .classList.toggle('visible', state === 'error');

  document.getElementById('apodCard')
    .classList.toggle('visible', state === 'card');
}

export function renderAPOD(data){

  const mc = document.getElementById('mediaContainer');

  if(data.media_type === 'video'){

    mc.innerHTML = `
      <div class="apod-iframe-wrapper">
        <iframe src="${data.url}" allowfullscreen></iframe>
      </div>
    `;

  } else {

    mc.innerHTML = `
      <div class="apod-media-wrapper">
        <img
          class="apod-img"
          src="${data.hdurl || data.url}"
          alt="${data.title}"
        />
      </div>
    `;
  }

  document.getElementById('apodDate').textContent =
    formatDate(data.date);

  document.getElementById('apodTitle').textContent =
    data.title;

  document.getElementById('apodExplanation').textContent =
    data.explanation;

  showState('card');
}