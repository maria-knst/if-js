import { getCalendarMonth } from '../main';

describe('Check getCalendarMonth-function', () => {
  const arr1 = [
    [
      { daysInMonth: 27, notCurrentMonth: true, selectedDay: false },
      { daysInMonth: 28, notCurrentMonth: true, selectedDay: false },
      { daysInMonth: 29, notCurrentMonth: true, selectedDay: false },
      { daysInMonth: 30, notCurrentMonth: true, selectedDay: false },
      { daysInMonth: 1, notCurrentMonth: false, selectedDay: false },
      { daysInMonth: 2, notCurrentMonth: false, selectedDay: false },
      { daysInMonth: 3, notCurrentMonth: false, selectedDay: false },
    ],
    [
      { daysInMonth: 4, notCurrentMonth: false, selectedDay: false },
      { daysInMonth: 5, notCurrentMonth: false, selectedDay: false },
      { daysInMonth: 6, notCurrentMonth: false, selectedDay: false },
      { daysInMonth: 7, notCurrentMonth: false, selectedDay: false },
      { daysInMonth: 8, notCurrentMonth: false, selectedDay: false },
      { daysInMonth: 9, notCurrentMonth: false, selectedDay: false },
      { daysInMonth: 10, notCurrentMonth: false, selectedDay: false },
    ],
    [
      { daysInMonth: 11, notCurrentMonth: false, selectedDay: false },
      { daysInMonth: 12, notCurrentMonth: false, selectedDay: false },
      { daysInMonth: 13, notCurrentMonth: false, selectedDay: false },
      { daysInMonth: 14, notCurrentMonth: false, selectedDay: false },
      { daysInMonth: 15, notCurrentMonth: false, selectedDay: false },
      { daysInMonth: 16, notCurrentMonth: false, selectedDay: false },
      { daysInMonth: 17, notCurrentMonth: false, selectedDay: false },
    ],
    [
      { daysInMonth: 18, notCurrentMonth: false, selectedDay: false },
      { daysInMonth: 19, notCurrentMonth: false, selectedDay: false },
      { daysInMonth: 20, notCurrentMonth: false, selectedDay: false },
      { daysInMonth: 21, notCurrentMonth: false, selectedDay: false },
      { daysInMonth: 22, notCurrentMonth: false, selectedDay: false },
      { daysInMonth: 23, notCurrentMonth: false, selectedDay: false },
      { daysInMonth: 24, notCurrentMonth: false, selectedDay: false },
    ],
    [
      { daysInMonth: 25, notCurrentMonth: false, selectedDay: false },
      { daysInMonth: 26, notCurrentMonth: false, selectedDay: false },
      { daysInMonth: 27, notCurrentMonth: false, selectedDay: false },
      { daysInMonth: 28, notCurrentMonth: false, selectedDay: false },
      { daysInMonth: 29, notCurrentMonth: false, selectedDay: false },
      { daysInMonth: 30, notCurrentMonth: false, selectedDay: false },
      { daysInMonth: 1, notCurrentMonth: true, selectedDay: false },
    ],
  ];
  test('Check arr1', () => {
    expect(getCalendarMonth(30, 7, 4)).toEqual(arr1);
  });
  test('Check wrong info', () => {
    expect(getCalendarMonth(30, 5, 39)).toBe(false);
  });
});
