const filterMembers = ['adult', 'child', 'room'];
const madeChildrenAgeDiv = () => {
  const childAgeDiv = document.getElementById('top__filter-with-children');
  childAgeDiv.innerHTML +=
    '<p>What is the age of the child you’re travelling with?</p>';
};

const childAgeDiv = document.getElementById('top__filter-with-children');

const addSelectorOfAge = () => {
  const selectEl = document.createElement('select');
  selectEl.classList.add('top__child-years');
  selectEl.setAttribute('id', 'child');
  for (let i = 0; i < 18; i++) {
    selectEl.innerHTML += `<option value="${i}">${i} years</option>`;
  }
  childAgeDiv.appendChild(selectEl);
};
const removeSelectorOfAge = () => {
  const selectors = document.querySelectorAll('.top__child-years');
  const lastSelect = selectors[selectors.length - 1];
  childAgeDiv.removeChild(lastSelect);
};

const toggleChildrenAge = (num) => {
  const element = document.querySelector('.top__filter-with-children');
  num < 1
    ? element.classList.add('temporarily-hidden')
    : element.classList.remove('temporarily-hidden');
};

const checkColorOfFilterButtons = (element1, num, extreme, selector) => {
  //Check if we reach min or max value
  if (selector === 'min') {
    if (
      element1.nextElementSibling.classList.contains('filter__button-disable')
    ) {
      element1.nextElementSibling.classList.remove('filter__button-disable');
    }
    if (num === String(Number(extreme) + 1)) {
      element1.previousElementSibling.classList.add('filter__button-disable');
    }
  } else if (selector === 'max') {
    if (
      element1.previousElementSibling.classList.contains(
        'filter__button-disable',
      )
    ) {
      element1.previousElementSibling.classList.remove(
        'filter__button-disable',
      );
    }
    if (num === String(Number(extreme) - 1)) {
      element1.nextElementSibling.classList.add('filter__button-disable');
    }
  }
};

const decrement = (event, element1, element2, index) => {
  event.preventDefault();

  let num = element1.innerText;
  const min = index === 1 ? '0' : '1';
  if (num === min) {
    return false;
  } else {
    checkColorOfFilterButtons(element1, num, min, 'min');
    num--;
    element1.innerText = num;
    element2.innerText = num;
  }
  if (index === 1) {
    removeSelectorOfAge();
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
    checkColorOfFilterButtons(element1, num, max, 'max');
    num++;
    element1.innerText = num;
    element2.innerText = num;
  }
  if (index === 1) {
    addSelectorOfAge();
    toggleChildrenAge(num);
  }
};

const addListenersToCountButtons = () => {
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
    document
      .getElementById(`${item}-plus`)
      .addEventListener('click', (event) => {
        increment(
          event,
          document.getElementById(`${item}-amount`),
          document.getElementById(`${item}-span`),
          index,
        );
      });
  });
};

const addInitialButtonStates = (...argumets) => {
  for (const arg of argumets) {
    console.log(arg);
    arg.classList.add('filter__button-disable'); // Made plus or minus buttons grey
  }
};

addInitialButtonStates(
  document.getElementById('child-minus'),
  document.getElementById('room-minus'),
);
madeChildrenAgeDiv();
addListenersToCountButtons();

document.getElementById('amount-field').addEventListener('click', (event) => {
  event.preventDefault();
  document.getElementById('top__people-filter').classList.toggle('disable');
});
