import {
  availHotelsFlexContainer,
  formAvailableHotelsElements,
  toggleAvailableHotelsContainer,
} from './available_hotels.js';
import {
  bubbleSort,
  formHomesElements,
  homesFlexContainer,
} from './homes_guests_loves.js';
import { today } from './top-form_calendar.js';
import { getMonthIndexFrom } from './dates_work.js';

const getReadingInput = (element) => {
  if (element.parentElement.classList.contains('top-search-inputs')) {
    return document.getElementById('destination');
  } else {
    return document.getElementById('destination_adaptive');
  }
};

const getExtraOptionsInput = (element) => {
  const peopleCount = {
    adults: 0,
    children: 0,
    childrenAge: [],
    rooms: 0,
  };
  if (element.parentElement.classList.contains('top-search-inputs')) {
    peopleCount.adults = document.getElementById('adult-span').innerText;
    peopleCount.children = document.getElementById('child-span').innerText;
    if (peopleCount.children !== '0') {
      peopleCount.childrenAge = Array.from(
        document.querySelectorAll('#child'),
      ).map((item) => {
        return item.value;
      });
    }
    peopleCount.rooms = document.getElementById('room-span').innerText;
  } else {
    peopleCount.adults = document.getElementById('top-1').value;
    peopleCount.children = document.getElementById('top-2').value;
    peopleCount.rooms = document.getElementById('top-3').value;
  }
  return peopleCount;
};

const formDates = (selector) => {
  const dates = document.querySelectorAll(selector);
  const curMonth = dates[0].parentElement.previousElementSibling.innerHTML;
  const nextMonth = dates[1].parentElement.previousElementSibling.innerHTML;
  return {
    startDate: {
      date: dates[0].innerHTML,
      month: getMonthIndexFrom(curMonth.substring(0, curMonth.length - 5)), // Deleted year from string
      year: today.getFullYear(),
    },
    endDate: {
      date: dates[1].innerHTML,
      month: getMonthIndexFrom(nextMonth.substring(0, nextMonth.length - 5)),
      year: today.getFullYear(),
    },
  };
};

const getTimes = (datesObject) => {
  const startTime = new Date(
    datesObject.startDate.year,
    datesObject.startDate.month,
    datesObject.startDate.date,
  ).getTime();
  const endTime = new Date(
    datesObject.endDate.year,
    datesObject.endDate.month,
    datesObject.endDate.date,
  ).getTime();
  return {
    startTime: startTime,
    endTime: endTime,
  };
};

const getCalendarsDays = () => {
  const calendar_dates = formDates('.cal_clicked-day');
  return getTimes(calendar_dates);
};

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

const makeRequest = (searchValue, extraOptions, calendarTimes) => {
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

  const queryParameters = `search=${searchValue}&dateFrom=${calendarTimes.startTime}&dateTo=${calendarTimes.endTime}&adults=${extraOptions.adults}&children=${extraOptions.childrenAge}&rooms=${extraOptions.rooms}`;
  fetch(`https://fe-student-api.herokuapp.com/api/hotels?${queryParameters}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      sessionStorage.setItem(searchValue, JSON.stringify(data));
      formAvailableHotelsElements(data);
      toggleAvailableHotelsContainer(data);
      addListenersToHomesElements('avail-hotels');
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
    const calendarTimes = getCalendarsDays();
    makeRequest(searchValue, extraOptions, calendarTimes);
  });
});

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
