import { deepEqual, getCalendarMonth } from '../main';

describe('Check deep equal function', () => {
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
  const obj4 = {
    f: {
      c: { a: 1 },
      b: 'b',
      a: 'a',
    },
    a: 'a',
  };

  test('Check same objects', () => {
    expect(deepEqual(obj1, obj2)).toBe(true);
  });
  test('Check different objects 1', () => {
    expect(deepEqual(obj1, obj3)).toBe(false);
  });
  test('Check different objects 2', () => {
    expect(deepEqual(obj2, obj3)).toBe(false);
  });
  test('Check different objects 3', () => {
    expect(deepEqual(obj4, obj3)).toBe(false);
  });
});

describe('Check getCalendarMonth-function', () => {
  const arr1 = [
    [
      { daysInMonth: 27, isCurrentMonth: false, selectedDay: false },
      { daysInMonth: 28, isCurrentMonth: false, selectedDay: false },
      { daysInMonth: 29, isCurrentMonth: false, selectedDay: false },
      { daysInMonth: 30, isCurrentMonth: false, selectedDay: false },
      { daysInMonth: 1, isCurrentMonth: true, selectedDay: false },
      { daysInMonth: 2, isCurrentMonth: true, selectedDay: false },
      { daysInMonth: 3, isCurrentMonth: true, selectedDay: false },
    ],
    [
      { daysInMonth: 4, isCurrentMonth: true, selectedDay: false },
      { daysInMonth: 5, isCurrentMonth: true, selectedDay: false },
      { daysInMonth: 6, isCurrentMonth: true, selectedDay: false },
      { daysInMonth: 7, isCurrentMonth: true, selectedDay: false },
      { daysInMonth: 8, isCurrentMonth: true, selectedDay: false },
      { daysInMonth: 9, isCurrentMonth: true, selectedDay: false },
      { daysInMonth: 10, isCurrentMonth: true, selectedDay: false },
    ],
    [
      { daysInMonth: 11, isCurrentMonth: true, selectedDay: false },
      { daysInMonth: 12, isCurrentMonth: true, selectedDay: false },
      { daysInMonth: 13, isCurrentMonth: true, selectedDay: false },
      { daysInMonth: 14, isCurrentMonth: true, selectedDay: false },
      { daysInMonth: 15, isCurrentMonth: true, selectedDay: false },
      { daysInMonth: 16, isCurrentMonth: true, selectedDay: false },
      { daysInMonth: 17, isCurrentMonth: true, selectedDay: false },
    ],
    [
      { daysInMonth: 18, isCurrentMonth: true, selectedDay: false },
      { daysInMonth: 19, isCurrentMonth: true, selectedDay: false },
      { daysInMonth: 20, isCurrentMonth: true, selectedDay: false },
      { daysInMonth: 21, isCurrentMonth: true, selectedDay: false },
      { daysInMonth: 22, isCurrentMonth: true, selectedDay: false },
      { daysInMonth: 23, isCurrentMonth: true, selectedDay: false },
      { daysInMonth: 24, isCurrentMonth: true, selectedDay: false },
    ],
    [
      { daysInMonth: 25, isCurrentMonth: true, selectedDay: false },
      { daysInMonth: 26, isCurrentMonth: true, selectedDay: false },
      { daysInMonth: 27, isCurrentMonth: true, selectedDay: false },
      { daysInMonth: 28, isCurrentMonth: true, selectedDay: false },
      { daysInMonth: 29, isCurrentMonth: true, selectedDay: false },
      { daysInMonth: 30, isCurrentMonth: true, selectedDay: false },
      { daysInMonth: 1, isCurrentMonth: false, selectedDay: false },
    ],
  ];
  test('Check arr1', () => {
    expect(getCalendarMonth(30, 7, 4)).toEqual(arr1);
  });
  test('Check wrong info', () => {
    expect(getCalendarMonth(30, 5, 39)).toBe(false);
  });
});
