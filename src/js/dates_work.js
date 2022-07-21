export const daysOfWeek = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
export const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export function getMonthIndexFrom(monthStr){
  return months.indexOf(monthStr);

}

const makeCalendarMatrix = (daysInMonth, daysInWeek) => {
  const matrix = new Array(Math.ceil(daysInMonth / 7));
  for (let i = 0; i < matrix.length; i++) {
    matrix[i] = new Array(daysInWeek);
  }
  return matrix;
};

export function getCalendarMonth(daysInMonth, daysInWeek, dayOfWeek) {
  if (dayOfWeek >= daysInWeek) {
    return false;
  }

  const todayDay = new Date().getDate();

  let count = daysInMonth - dayOfWeek + 1;
  const matrix = makeCalendarMatrix(daysInMonth, daysInWeek);

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

export const getParameters = () => {
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

export const calendarMonth = getCalendarMonth(
  getParameters().daysInMonth,
  getParameters().daysInWeek,
  getParameters().dayOfWeek,
);
