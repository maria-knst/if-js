import { getCalendarMonth } from '../main';

describe('Check getCalendarMonth-function', () => {
  const arr1 = [
    [
      {
        daysInMonth: 27,
        isCurrentMonth: false,
        selectedDay: false,
        currentDay: false,
      },
      {
        daysInMonth: 28,
        isCurrentMonth: false,
        selectedDay: false,
        currentDay: false,
      },
      {
        daysInMonth: 29,
        isCurrentMonth: false,
        selectedDay: false,
        currentDay: false,
      },
      {
        daysInMonth: 30,
        isCurrentMonth: false,
        selectedDay: false,
        currentDay: false,
      },
      {
        daysInMonth: 1,
        isCurrentMonth: true,
        selectedDay: false,
        currentDay: false,
      },
      {
        daysInMonth: 2,
        isCurrentMonth: true,
        selectedDay: false,
        currentDay: false,
      },
      {
        daysInMonth: 3,
        isCurrentMonth: true,
        selectedDay: false,
        currentDay: false,
      },
    ],
    [
      {
        daysInMonth: 4,
        isCurrentMonth: true,
        selectedDay: false,
        currentDay: false,
      },
      {
        daysInMonth: 5,
        isCurrentMonth: true,
        selectedDay: false,
        currentDay: false,
      },
      {
        daysInMonth: 6,
        isCurrentMonth: true,
        selectedDay: false,
        currentDay: false,
      },
      {
        daysInMonth: 7,
        isCurrentMonth: true,
        selectedDay: false,
        currentDay: false,
      },
      {
        daysInMonth: 8,
        isCurrentMonth: true,
        selectedDay: false,
        currentDay: false,
      },
      {
        daysInMonth: 9,
        isCurrentMonth: true,
        selectedDay: false,
        currentDay: false,
      },
      {
        daysInMonth: 10,
        isCurrentMonth: true,
        selectedDay: false,
        currentDay: false,
      },
    ],
    [
      {
        daysInMonth: 11,
        isCurrentMonth: true,
        selectedDay: false,
        currentDay: false,
      },
      {
        daysInMonth: 12,
        isCurrentMonth: true,
        selectedDay: false,
        currentDay: false,
      },
      {
        daysInMonth: 13,
        isCurrentMonth: true,
        selectedDay: false,
        currentDay: false,
      },
      {
        daysInMonth: 14,
        isCurrentMonth: true,
        selectedDay: false,
        currentDay: false,
      },
      {
        daysInMonth: 15,
        isCurrentMonth: true,
        selectedDay: false,
        currentDay: false,
      },
      {
        daysInMonth: 16,
        isCurrentMonth: true,
        selectedDay: false,
        currentDay: false,
      },
      {
        daysInMonth: 17,
        isCurrentMonth: true,
        selectedDay: false,
        currentDay: false,
      },
    ],
    [
      {
        daysInMonth: 18,
        isCurrentMonth: true,
        selectedDay: false,
        currentDay: false,
      },
      {
        daysInMonth: 19,
        isCurrentMonth: true,
        selectedDay: false,
        currentDay: false,
      },
      {
        daysInMonth: 20,
        isCurrentMonth: true,
        selectedDay: false,
        currentDay: false,
      },
      {
        daysInMonth: 21,
        isCurrentMonth: true,
        selectedDay: false,
        currentDay: false,
      },
      {
        daysInMonth: 22,
        isCurrentMonth: true,
        selectedDay: false,
        currentDay: false,
      },
      {
        daysInMonth: 23,
        isCurrentMonth: true,
        selectedDay: false,
        currentDay: false,
      },
      {
        daysInMonth: 24,
        isCurrentMonth: true,
        selectedDay: false,
        currentDay: false,
      },
    ],
    [
      {
        daysInMonth: 25,
        isCurrentMonth: true,
        selectedDay: false,
        currentDay: false,
      },
      {
        daysInMonth: 26,
        isCurrentMonth: true,
        selectedDay: false,
        currentDay: false,
      },
      {
        daysInMonth: 27,
        isCurrentMonth: true,
        selectedDay: false,
        currentDay: false,
      },
      {
        daysInMonth: 28,
        isCurrentMonth: true,
        selectedDay: false,
        currentDay: false,
      },
      {
        daysInMonth: 29,
        isCurrentMonth: true,
        selectedDay: false,
        currentDay: false,
      },
      {
        daysInMonth: 30,
        isCurrentMonth: true,
        selectedDay: false,
        currentDay: false,
      },
      {
        daysInMonth: 1,
        isCurrentMonth: false,
        selectedDay: false,
        currentDay: false,
      },
    ],
  ];

  const todayDay = new Date().getDate();

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr1[i].length; j++) {
      if (arr1[i][j].daysInMonth === todayDay) {
        arr1[i][j].currentDay = true;
      }
    }
  }

  test('Check arr1', () => {
    expect(getCalendarMonth(30, 7, 4)).toEqual(arr1);
  });
  test('Check wrong info', () => {
    expect(getCalendarMonth(30, 5, 39)).toBe(false);
  });
});
