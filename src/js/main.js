import data from './data_hostels.js';
import { daysOfWeek, months, calendarMonth } from './dates_work.js';

//___________________________HOMES SECTION
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

//____________________________TOP SECTION
//desktop form, number of people and rooms
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

//desktop form, dates
const today = new Date();

const findToday = (index, innerIndex) => {
  const s = '.cal_day-num';
  const resIndex = index * 7 + innerIndex;
  document.querySelectorAll(s)[resIndex].classList.add('cal_today');
  const pastDays = document.querySelectorAll('.cal_day-num');
  for (let i = 0; i < index * 7 + innerIndex; i++) {
    pastDays[i].classList.add('cal_past-day');
  }
};

//Created calendar days
document.querySelectorAll('.cal_grid-wrapper').forEach((element) => {
  daysOfWeek.forEach((item) => {
    element.innerHTML += `<div class="cal_day cal_day-of-week">${item}</div>`;
  });
  calendarMonth.forEach((item, index) => {
    item.forEach((innerItem, innerIndex) => {
      innerItem.isCurrentMonth === true
        ? (element.innerHTML += `<div class="cal_day cal_day-num">${innerItem.daysInMonth}</div>`)
        : (element.innerHTML += `<div class="cal_day cal_day-num cal_not-current-month">${innerItem.daysInMonth}</div>`);

      if (innerItem.currentDay === true) {
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


let startDate = false;
let endDate = false;

// Adding or removing grey background
const madeGreyCells = (startDate, endDate, selector) =>{
  //made dates elements between start and end grey
    const periodDivs = document.querySelector('.top__calendar').querySelectorAll('.cal_day-num');
    const period = Array.from(periodDivs).slice(startDate.index_ + 1, endDate.index_);
    period.forEach( (item) => {
      if(selector === 'add'){
        item.classList.add('cal_choosing-day');
      }else if(selector === 'remove'){
        item.classList.remove('cal_choosing-day');
      }
    });
};


const madePeriodOfTraveling = ([startDate, endDate]) => {
  if(startDate === false || endDate === false){
    return;
  }
  //check if start date later than end date
    if(Number(startDate.innerText) > Number(endDate.innerText) &&
    endDate.parentElement.parentElement.classList.contains('calendar_current-month')){
      const tmp = startDate;
      startDate = endDate;
      endDate = tmp;
      console.log(startDate, endDate);
    }
    madeGreyCells(startDate, endDate, 'add');
};

const removeFromStart = ([startDate, endDate]) =>{
  madeGreyCells(startDate, endDate, 'remove');
  startDate.classList.remove('cal_clicked-day');
};

const removeFromEnd = ([startDate, endDate]) => {
  madeGreyCells(startDate, endDate, 'remove');
  endDate.classList.remove('cal_clicked-day');
};

//To choose time period of travel
document.querySelectorAll('.cal_day-num').forEach( (element, index) => {
  element.addEventListener('click', (event) => {
    event.preventDefault();
    if(! event.target.classList.contains('cal_past-day')){
      if(startDate === false){
        event.target.classList.toggle('cal_clicked-day');
        startDate = event.target;
        startDate.index_ = index;
        madePeriodOfTraveling([startDate, endDate]);
      }else if(endDate === false){
        event.target.classList.toggle('cal_clicked-day');
        endDate = event.target;
        endDate.index_ = index;
        madePeriodOfTraveling([startDate, endDate]);
      }
      //If both dates is choosing
      else if(startDate !== false && endDate !== false){
        if(event.target === startDate){
          removeFromStart([startDate, endDate]);
          startDate = false;
        }else if(event.target === endDate){
          removeFromEnd([startDate, endDate]);
          endDate  = false;
        }
      }
      console.log(`start: ${startDate.index_}, end: ${endDate.index_}`);
    }
  });
});


