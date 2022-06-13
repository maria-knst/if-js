//Task1
export const colors = {
  data: ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'],
  [Symbol.iterator]() {
    return this;
  },
  next() {
    if (this.current === undefined || this.current === this.data.length) {
      this.current = 0;
    }

    if (this.current < this.data.length) {
      return {
        done: false,
        value: this.data[this.current++],
      };
    } else {
      delete this.current;
      return {
        done: true,
      };
    }
  },
};

//Task2
export function getCalendarMonth(daysInMonth, daysInWeek, dayOfWeek) {
  if (dayOfWeek >= daysInWeek) {
    return false;
  }

  const todayDay = new Date().getDate();

  let count = daysInMonth - dayOfWeek + 1;
  const matrix = new Array(Math.ceil(daysInMonth / 7));
  for (let i = 0; i < matrix.length; i++) {
    matrix[i] = new Array(daysInWeek);
  }

  let start = false; // if month is start
  for (let i = 0; i < Math.ceil(daysInMonth / daysInWeek); i++) {
    for (let j = 0; j < daysInWeek; j++) {
      if (count % daysInMonth === 0) {
        matrix[i][j] = {
          daysInMonth: daysInMonth,
          isCurrentMonth: start,
          selectedDay: false,
          currentDay: daysInMonth === todayDay && start === true,
        };
        start = false; // month is over
      } else {
        if (count % daysInMonth === 1 && i === 0) {
          start = true;
        } // the beginning of the month on the first line

        matrix[i][j] = {
          daysInMonth: count % daysInMonth,
          isCurrentMonth: start,
          selectedDay: false,
          currentDay: count % daysInMonth === todayDay && start === true, //checked if day is today day
        };
      }
      count++;
    }
  }

  return matrix;
}

const getParameters = () => {
  const options = {};
  const today = new Date();
  options.daysInMonth = new Date(
    today.getFullYear(),
    today.getMonth() + 1,
    0,
  ).getDate();
  options.dayOfWeek =
    new Date(today.getFullYear(), today.getMonth(), 1).getDay() - 1;
  options.daysInWeek = 7;

  return options;
};

const calendarMonth = getCalendarMonth(
  getParameters().daysInMonth,
  getParameters().daysInWeek,
  getParameters().dayOfWeek,
);

console.log(calendarMonth);
