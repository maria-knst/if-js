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
const madeChildrenAgeDiv = () => {
  const childAgeDiv = document.getElementById('top__filter-with-children');
  childAgeDiv.innerHTML +=
    '<p>What is the age of the child you’re travelling with?</p>';
};

const addSelectorOfAge = () => {
  const childAgeDiv = document.getElementById('top__filter-with-children');

  const selectEl = document.createElement('select');
  selectEl.classList.add('top__child-years');
  selectEl.setAttribute('id', 'child');
  for (let i = 0; i < 18; i++) {
    selectEl.innerHTML += `<option value="${i}">${i} years</option>`;
  }
  childAgeDiv.appendChild(selectEl);
};
const removeSelectorOfAge = () => {
  const childAgeDiv = document.getElementById('top__filter-with-children');
  const selectors = document.querySelectorAll('.top__child-years');
  const lastSelect = selectors[selectors.length - 1];
  childAgeDiv.removeChild(lastSelect);
};

const toggleChildrenAge = (num) => {
  if (num < 1) {
    document
      .querySelector('.top__filter-with-children')
      .classList.add('temporarily-hidden');
  } else {
    document
      .querySelector('.top__filter-with-children')
      .classList.remove('temporarily-hidden');
  }
};

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
    removeSelectorOfAge();
  }
  if (index === 1) {
    toggleChildrenAge(num);
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
    addSelectorOfAge();
  }
  if (index === 1) {
    toggleChildrenAge(num);
  }
};

madeChildrenAgeDiv();
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

document.getElementById('amount-field').addEventListener('click', (event) => {
  event.preventDefault();
  document.getElementById('top__people-filter').classList.toggle('disable');
});
