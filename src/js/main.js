import { daysOfWeek, months, calendarMonth } from './dates_work.js';

const getReadingInput = (element) => {
  if (element.parentElement.classList.contains('top-search-inputs')) {
    return document.getElementById('destination');
  } else {
    return document.getElementById('destination_adaptive');
  }
};

const getExtraOptionsInput = (element) => {
  let [adults, children, childrenAge, rooms] = [];
  if (element.parentElement.classList.contains('top-search-inputs')) {
    adults = document.getElementById('adult-span').innerText;
    children = document.getElementById('child-span').innerText;
    if (children !== '0') {
      childrenAge = Array.from(document.querySelectorAll('#child')).map(
        (item) => {
          return item.value;
        },
      );
    }
    rooms = document.getElementById('room-span').innerText;
  } else {
    adults = document.getElementById('top-1').value;
    children = document.getElementById('top-2').value;
    rooms = document.getElementById('top-3').value;
    childrenAge = [];
  }
  return [adults, children, childrenAge, rooms];
};

const availHotelsFlexContainer = document.getElementById(
  'available-hotels__flex-container',
);
const homesContainer = document.querySelector('.homes__container');
const homesFlexContainer = homesContainer.querySelector(
  '.places__flex-container',
);

const addListenersToHomesElements = (selector) => {
  const container =
    selector === 'homes' ? homesFlexContainer : availHotelsFlexContainer;
  container.querySelectorAll('.places__image').forEach((element) => {
    element.addEventListener('mouseenter', (event) => {
      event.target.parentElement
        .querySelector('.places__home-description')
        .classList.toggle('places__home-description_hovered');
    });
  });
  container.querySelectorAll('.places__image').forEach((element) => {
    element.addEventListener('mouseout', (event) => {
      event.target.parentElement
        .querySelector('.places__home-description')
        .classList.toggle('places__home-description_hovered');
    });
  });
};

const formAvailableHotelsElements = (data) => {
  availHotelsFlexContainer.innerHTML =
    '<button class="places__arrow" id="places-avail-hotels__arrow-prev">\n' +
    '              <img src="./src/images/svg/Arrow.svg" alt="->" />\n' +
    '            </button>\n' +
    '            <button class="places__arrow" id="places-avail-hotels__arrow-next">\n' +
    '              <img src="./src/images/svg/Arrow.svg" alt="->" />\n' +
    '            </button>';
  data.forEach((element, index) => {
    availHotelsFlexContainer.innerHTML += `
      <div class="places__element col-3">
        <img
                src=${element.imageUrl}
                id="avai-hotels_${index + 1}"
                class="places__image"
                alt="available-hotels-img-${index + 1}"
        />
        <div class="places__home-description">
            <p class="places__label">${element.name}</p>
            <p class="homes__destination">${element.city}, ${element.country}
            </p>
         </div>

          </div>
    `;
    if (index >= 2) {
      const placesElement =
        availHotelsFlexContainer.querySelectorAll('.places__element')[index];
      placesElement.classList.add('hidden');
    }
    if (index >= 4) {
      const placesElement =
        availHotelsFlexContainer.querySelectorAll('.places__element')[index];
      placesElement.classList.add('temporarily-hidden');
    }
  });
};

const toggleAvailableHotelsContainer = (data) => {
  if (data === null || data.length === 0) {
    document
      .querySelector('.available-hotels')
      .classList.add('available-hotels__hidden__');
  } else {
    document
      .querySelector('.available-hotels')
      .classList.remove('available-hotels__hidden__');
  }
};

const makeRequest = (searchValue, extraOptions) => {
  if (searchValue === '') {
    toggleAvailableHotelsContainer(null);
    return;
  }
  if (sessionStorage.getItem(searchValue)) {
    const data_ = JSON.parse(sessionStorage.getItem(searchValue));
    formAvailableHotelsElements(data_);
    toggleAvailableHotelsContainer(data_);
    addListenersToHomesElements('avail-hotels');
    return;
  }
  const queryParameters = `search=${searchValue}&adults=${extraOptions[0]}&children=${extraOptions[2]}&rooms=${extraOptions[3]}`;
  fetch(`https://fe-student-api.herokuapp.com/api/hotels?${queryParameters}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(queryParameters);
      sessionStorage.setItem(searchValue, JSON.stringify(data));
      formAvailableHotelsElements(data);
      toggleAvailableHotelsContainer(data);
      addListenersToHomesElements('avail-hotels');
      console.log(queryParameters);
    })
    .catch((err) => {
      console.log(err.message);
    });
};

document.querySelectorAll('.top-search-button_clicked').forEach((element) => {
  element.addEventListener('click', (event) => {
    event.preventDefault();
    const readingInput = getReadingInput(element);
    const extraOptions = getExtraOptionsInput(element);
    const searchValue = readingInput.value;
    makeRequest(searchValue, extraOptions);
  });
});

const bubbleSort = (data) => {
  for (let i = 0; i < data.length - 1; i++) {
    for (let j = 0; j < data.length - 1 - i; j++) {
      if (data[j].name > data[j + 1].name) {
        const tmp = data[j];
        data[j] = data[j + 1];
        data[j + 1] = tmp;
      }
    }
  }

  return data;
};

const formHomesElements = (data_) => {
  data_.forEach((element, index) => {
    homesFlexContainer.innerHTML += `
    <div class="places__element col-3">
        <img
                src=${element.imageUrl}
                id="homes_${index + 1}"
                class="places__image"
                alt="home-img-${index + 1}"
        />
        <div class="places__home-description">
            <p class="places__label">${element.name}</p>
            <p class="homes__destination">${element.city}, ${element.country}
            </p>
         </div>

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
};

fetch('https://fe-student-api.herokuapp.com/api/hotels/popular')
  .then((response) => {
    return response.json();
  })
  .then((data_) => {
    bubbleSort(data_);
    formHomesElements(data_);
    addListenersToHomesElements('homes');
  })
  .catch((err) => {
    console.log(err.message);
  });

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

const today = new Date();

const findToday = (index, innerIndex) => {
  const dayNumber = '.cal_day-num';
  const resIndex = index * 7 + innerIndex;
  document.querySelectorAll(dayNumber)[resIndex].classList.add('cal_today');
  const pastDays = document.querySelectorAll('.cal_day-num');
  for (let i = 0; i < index * 7 + innerIndex; i++) {
    pastDays[i].classList.add('cal_past-day');
  }
};

//Created calendar days
document.querySelectorAll('.cal_grid-wrapper-d').forEach((element) => {
  daysOfWeek.forEach((item) => {
    element.innerHTML += `<div class="cal_day cal_day-of-week">${item}</div>`;
  });
  calendarMonth.forEach((item, index) => {
    item.forEach((innerItem, innerIndex) => {
      innerItem.isCurrentMonth
        ? (element.innerHTML += `<div class="cal_day cal_day-num cal_day-num-d">${innerItem.daysInMonth}</div>`)
        : (element.innerHTML += `<div class="cal_day cal_day-num cal_day-num-d cal_not-current-month">${innerItem.daysInMonth}</div>`);

      if (innerItem.currentDay) {
        findToday(index, innerIndex);
      }
    });
  });
});

//Added name of month
document.getElementById('cal_current-month-name').innerText = `${
  months[today.getMonth()]
} ${today.getFullYear()}`;
document.getElementById('cal_next-month-name').innerText = `${
  months[today.getMonth() + 1]
} ${today.getFullYear()}`;

//Added listener to date-button to open or close calendar
document.getElementById('date-field').addEventListener('click', (event) => {
  event.preventDefault();
  document.getElementById('top__calendar').classList.toggle('disable');
});

let startDate = false;
let endDate = false;

// Adding or removing grey background
const madeGreyCells = (startDate, endDate, selector) => {
  //made dates elements between start and end grey
  const periodDivs = document
    .querySelector('.top__calendar')
    .querySelectorAll('.cal_day-num');
  const period = Array.from(periodDivs).slice(
    startDate.index_ + 1,
    endDate.index_,
  );
  period.forEach((item) => {
    if (selector === 'add') {
      item.classList.add('cal_choosing-day');
    } else if (selector === 'remove') {
      item.classList.remove('cal_choosing-day');
    }
  });
};

const madePeriodOfTraveling = (startDate, endDate) => {
  if (!startDate || !endDate) {
    return;
  }
  //check if start date later than end date
  if (startDate.index_ > endDate.index_) {
    const tmp = startDate;
    startDate = endDate;
    endDate = tmp;
  }
  madeGreyCells(startDate, endDate, 'add');
};

const removeFrom = (selector, startDate, endDate) => {
  madeGreyCells(startDate, endDate, 'remove');
  selector === 'start'
    ? startDate.classList.remove('cal_clicked-day')
    : endDate.classList.remove('cal_clicked-day');
};

const AddStartDayInSpan = (startDate) => {
  if (!startDate) {
    document.getElementById('start-date').innerText = 'DD.MM.YY';
  } else {
    const date = startDate.innerText;
    const month_year = startDate.parentElement.previousElementSibling.innerText;
    document.getElementById('start-date').innerText = date + ' ' + month_year;
  }
};
const AddEndDayInSpan = (endDate) => {
  if (!endDate) {
    document.getElementById('end-date').innerText = 'DD.MM.YY';
  } else {
    const date = endDate.innerText;
    const month_year = endDate.parentElement.previousElementSibling.innerText;
    document.getElementById('end-date').innerText = date + ' ' + month_year;
  }
};
const AddDaysInSpan = (startDate, endDate) => {
  if (startDate.index_ > endDate.index_) {
    const tmp = startDate;
    startDate = endDate;
    endDate = tmp;
  }
  AddStartDayInSpan(startDate);
  AddEndDayInSpan(endDate);
  if (startDate && endDate) {
    document.getElementById('top__calendar').classList.toggle('disable');
  }
};

//To choose time period of travel
document.querySelectorAll('.cal_day-num-d').forEach((element, index) => {
  element.addEventListener('click', (event) => {
    event.preventDefault();
    if (!event.target.classList.contains('cal_past-day')) {
      if (!startDate) {
        event.target.classList.toggle('cal_clicked-day');
        if (event.target === endDate) {
          //Check if choosing cell is already clicked
          endDate = false;
        } else {
          startDate = event.target;
          startDate.index_ = index; //This is index in big matrix which contains current month and next month
          madePeriodOfTraveling(startDate, endDate);
        }
      } else if (!endDate) {
        event.target.classList.toggle('cal_clicked-day');
        if (event.target === startDate) {
          //Check if choosing cell is already clicked
          startDate = false;
        } else {
          endDate = event.target;
          endDate.index_ = index;
          madePeriodOfTraveling(startDate, endDate);
        }
      }
      //If both dates is choosing
      else if (startDate !== false && endDate !== false) {
        //check if start date later than end date
        if (startDate.index_ > endDate.index_) {
          const tmp = startDate;
          startDate = endDate;
          endDate = tmp;
        }

        if (event.target === startDate) {
          removeFrom('start', startDate, endDate);
          startDate = false;
        } else if (event.target === endDate) {
          removeFrom('end', startDate, endDate);
          endDate = false;
        } else {
          removeFrom('end', startDate, endDate);
          startDate.classList.remove('cal_clicked-day');
          endDate = false;
          startDate = event.target;
          startDate.index_ = index;
          event.target.classList.toggle('cal_clicked-day');
        }
      }
      AddDaysInSpan(startDate, endDate);
    }
  });
});

document.getElementById('cal_current-month-name-adaptive_1').innerText = `${
  months[today.getMonth()]
} ${today.getFullYear()}`;
document.getElementById('cal_next-month-name-adaptive_2').innerText = `${
  months[today.getMonth() + 1]
} ${today.getFullYear()}`;

const findToday_a = (index, innerIndex) => {
  const dayNumber = '.cal_day-num-a';
  const resIndex = index * 7 + innerIndex;
  document.querySelectorAll(dayNumber)[resIndex].classList.add('cal_today');
  const pastDays = document.querySelectorAll('.cal_day-num-a');
  for (let i = 0; i < index * 7 + innerIndex; i++) {
    pastDays[i].classList.add('cal_past-day');
  }
};

let startDate_a = false;

const AddDayInSpan_a = (date_, selector) => {
  const date = date_.innerText;
  const month_year = date_.parentElement.previousElementSibling.innerText;
  const str = selector === 1 ? 'check-in' : 'check-out';
  document.getElementById(str).innerText = date + ' ' + month_year;
  document
    .getElementById(`top__calendar-adaptive_${selector}`)
    .classList.toggle('disable_a');
};

const addListenerToDateFields_a = (selector) => {
  const ending = selector === 1 ? 'in' : 'out';
  document
    .getElementById(`check-${ending}`)
    .addEventListener('click', (event) => {
      event.preventDefault();
      event.target.parentElement.classList.toggle('active-check');
      document
        .getElementById(`top__calendar-adaptive_${selector}`)
        .classList.toggle('disable_a');
    });
};

//Click on start date
addListenerToDateFields_a(1);

//Click on end date
addListenerToDateFields_a(2);

//Created calendar days
const createCalendarDays = (selector) => {
  document
    .querySelectorAll(`.cal_grid-wrapper-a${selector}`)
    .forEach((element) => {
      daysOfWeek.forEach((item) => {
        element.innerHTML += `<div class="cal_day cal_day-of-week">${item}</div>`;
      });
      calendarMonth.forEach((item, index) => {
        item.forEach((innerItem, innerIndex) => {
          innerItem.isCurrentMonth === true
            ? (element.innerHTML += `<div class="cal_day cal_day-num cal_day-num-a">${innerItem.daysInMonth}</div>`)
            : (element.innerHTML += `<div class="cal_day cal_day-num cal_day-num-a cal_not-current-month">${innerItem.daysInMonth}</div>`);

          if (innerItem.currentDay === true) {
            findToday_a(index, innerIndex);
          }
        });
      });
    });
};

createCalendarDays(1);
createCalendarDays(2);

document.querySelectorAll('.cal_day-num-a').forEach((element) => {
  element.addEventListener('click', (event) => {
    event.preventDefault();
    if (!event.target.classList.contains('cal_past-day')) {
      const selector = event.target.parentElement.classList.contains(
        'cal_grid-wrapper-a1',
      )
        ? 1
        : 2;
      event.target.classList.toggle('cal_clicked-day');
      if (!startDate_a) {
        //If start date is not choosing
        startDate_a = event.target;
        AddDayInSpan_a(startDate_a, selector);
      } else {
        startDate_a.classList.toggle('cal_clicked-day');
        startDate_a = event.target;

        AddDayInSpan_a(startDate_a, selector);
      }
    }
  });
});
