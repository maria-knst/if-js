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

madeChildrenAgeDiv();
addListenersToCountButtons();

document.getElementById('amount-field').addEventListener('click', (event) => {
  event.preventDefault();
  document.getElementById('top__people-filter').classList.toggle('disable');
});