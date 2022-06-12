import data from './data_hostels.js';

const homesContainer = document.querySelector('.homes__container');
const homesFlexContainer = homesContainer.querySelector(
  '.places__flex-container',
);

console.log(homesFlexContainer);

for (let i = 0; i < data.length; i++) {
  const homeElement = document.createElement('div');
  homeElement.classList.add('places__element', 'col-3');

  const homeFigureEl = document.createElement('figure');
  const homeImageEl = document.createElement('img');
  const homeImageFigcaptoinEl = document.createElement('figcaption');
  homeImageEl.classList.add('places__image');
  homeImageEl.setAttribute('src', data[i].imageUrl);
  homeImageEl.setAttribute('alt', `home-img-${i + 1}`);
  homeImageEl.setAttribute('id', `homes-${i + 1}`);

  homeImageFigcaptoinEl.classList.add('places__label');
  homeImageFigcaptoinEl.textContent = data[i].name;

  homeFigureEl.appendChild(homeImageEl);
  homeFigureEl.appendChild(homeImageFigcaptoinEl);

  const homeNameEl = document.createElement('p');
  homeNameEl.classList.add('homes__destination');
  homeNameEl.textContent = `${data[i].city}, ${data[i].country}`;

  homeElement.appendChild(homeFigureEl);
  homeElement.appendChild(homeNameEl);
  if (i >= 2) {
    homeElement.classList.add('hidden');
  }
  if (i >= 4) {
    homeElement.classList.add('temporarily-hidden');
  }
  homesFlexContainer.appendChild(homeElement);
}

console.log(homesFlexContainer);
