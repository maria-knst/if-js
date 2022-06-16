import data from './data_hostels.js';

//HOMES SECTION
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
    placesElement.classList.add('hidden');
  }
  if (index >= 4) {
    const placesElement =
      homesFlexContainer.querySelectorAll('.places__element')[index];
    placesElement.classList.add('temporarily-hidden');
  }
});

//TOP SECTION
const filterMembers = ['adult', 'child', 'room'];

const decrement = (event, element1, element2, index) => {
  event.preventDefault();
  let num = element1.innerText;
  const min = index === 1 ? '0' : '1';
  if (num === min) {
    return false;
  } else {
    num--;
    element1.innerText = num;
    element2.innerText = num;
    return true;
  }
};
const increment = (event, element1, element2, index) => {
  event.preventDefault();
  let num = element1.innerText;
  const max = index === 1 ? '10' : '30';
  if (num === max) {
    return false;
  } else {
    num++;
    element1.innerText = num;
    element2.innerText = num;
  }
};

filterMembers.forEach((item, index) => {
  document
    .getElementById(`${item}-minus`)
    .addEventListener('click', (event) => {
      decrement(
        event,
        document.getElementById(`${item}-amount`),
        document.getElementById(`${item}-span`),
        index,
      );
    });
  document.getElementById(`${item}-plus`).addEventListener('click', (event) => {
    increment(
      event,
      document.getElementById(`${item}-amount`),
      document.getElementById(`${item}-span`),
      index,
    );
  });
});
