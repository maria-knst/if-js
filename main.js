//Task1
const obj1 = {
  a: 'a',
  b: {
    a: 'a',
    b: 'b',
    c: { a: 1 },
  },
};
const obj2 = {
  b: {
    c: { a: 1 },
    b: 'b',
    a: 'a',
  },
  a: 'a',
};
const obj3 = {
  a: {
    c: { a: 'a' },
    b: 'b',
    a: 'a',
  },
  b: 'b',
};

export const deepEqual = (object1, object2) => {
  for (const key in object1) {
    if (key in object2) {
      if (
        typeof object1[key] === 'object' &&
        typeof object2[key] === 'object'
      ) {
        deepEqual(object1[key], object2[key]); //recursion
      } else if (typeof object1[key] !== typeof object2[key]) {
        return false; // if keys are not equal
      }
    } else {
      return false; // no key matches
    }
  }

  return true;
};

deepEqual(obj1, obj2);
deepEqual(obj1, obj3);

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

  let start = false; // if month is start
  for (let i = 0; i < Math.ceil(daysInMonth / daysInWeek); i++) {
    for (let j = 0; j < daysInWeek; j++) {
      if (count % daysInMonth === 0) {
        matrix[i][j] = {
          daysInMonth: daysInMonth,
          isCurrentMonth: start,
          selectedDay: false,
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
        };
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
