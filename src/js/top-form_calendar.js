import { calendarMonth, daysOfWeek, months } from './dates_work.js';

export const today = new Date();

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
let endDate_a = false;

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

document.querySelectorAll('.cal_day-num-a').forEach((element, index) => {
  element.addEventListener('click', (event) => {
    event.preventDefault();
    if (!event.target.classList.contains('cal_past-day')) {
      const selector = event.target.parentElement.classList.contains(
        'cal_grid-wrapper-a1',
      )
        ? 1
        : 2;
      event.target.classList.toggle('cal_clicked-day');
      if (selector === 1) {
        if (!startDate_a) {
          //If start date is not choosing
          startDate_a = event.target;
          AddDayInSpan_a(startDate_a, selector);
        } else {
          startDate_a.classList.toggle('cal_clicked-day');
          startDate_a = event.target;
          AddDayInSpan_a(startDate_a, selector);
        }
      } else if (selector === 2) {
        if (!endDate_a) {
          //If start date is not choosing
          endDate_a = event.target;
          AddDayInSpan_a(endDate_a, selector);
        } else {
          endDate_a.classList.toggle('cal_clicked-day');
          endDate_a = event.target;
          AddDayInSpan_a(endDate_a, selector);
        }
      }
    }
  });
});
