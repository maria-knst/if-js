//Task1



//Task2
export function getCalendarMonth(daysInMonth, daysInWeek, dayOfWeek) {
  if (dayOfWeek >= daysInWeek) {
    return false;
  }
  let count = daysInMonth - dayOfWeek + 1;
  const matrix = new Array(Math.ceil(daysInMonth / 7));
  for (let i = 0; i < matrix.length; i++) {
    matrix[i] = new Array(daysInWeek);
  }

  let start = false; // показывает начался ли месяц
  for (let i = 0; i < Math.ceil(daysInMonth / daysInWeek); i++) {
    for (let j = 0; j < daysInWeek; j++) {
      if (count % daysInMonth === 0) {
        matrix[i][j] = {'daysInMonth': daysInMonth, 'notCurrentMonth': !start, 'selectedDay': false};
        start = false; // означет, что месяц закончился
      } else {
        if(count % daysInMonth === 1 && i === 0){ start = true; } // начало месяца обязательно будет на первой строчке
        matrix[i][j] = {'daysInMonth': count % daysInMonth, 'notCurrentMonth': !start, 'selectedDay': false};
      }
      count++;
    }
  }

  return matrix;
}

const daysInMonth = 30;
const daysInWeek = 7;
const dayOfWeek = 4;
const calendarMonth = getCalendarMonth(daysInMonth, daysInWeek, dayOfWeek);

