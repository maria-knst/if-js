import data from './data_hostels.js';

const homesContainer = document.querySelector('.homes__container');
const homesFlexContainer = homesContainer.querySelector(
  '.places__flex-container',
);

data.forEach((element, index) => {
  homesFlexContainer.innerHTML += `
    <div class="places__element col-3">
            <figure>
              <img
                src=${element.imageUrl}
                id="homes_${index + 1}"
                class="places__image"
                alt="home-img-${index + 1}"
              />
              <figcaption class="places__label">${element.name}</figcaption>
            </figure>
            <p class="homes__destination">${element.city}, ${
    element.country
  }</p>
          </div>
  `;
  if (index >= 2) {
    const placesElement =
      homesFlexContainer.querySelectorAll('.places__element')[index];
    console.log(placesElement);
    placesElement.classList.add('hidden');
  }
  if (index >= 4) {
    const placesElement =
      homesFlexContainer.querySelectorAll('.places__element')[index];
    placesElement.classList.add('temporarily-hidden');
  }
});
