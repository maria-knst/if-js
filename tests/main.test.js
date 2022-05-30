import { palindrom, getMatchedElements, getCalendarMonth } from '../main';

describe('Check palindrom function', () => {
  test('Check "adda"', () => {
    expect(palindrom('adda')).toBe(true);
  });
  test('Check "Hello"', () => {
    expect(palindrom('Hello')).toBe(false);
  });
  test('Check ""', () => {
    expect(palindrom('')).toBe(true);
  });
});

describe('Check getMatchedElements-function', () => {
  test('Check "germany"', () => {
    expect(getMatchedElements('germany')).toEqual([
      'Germany, Berlin, Hostel Friendship',
      'Germany, Hamburg, Steigenberger Hotel',
    ]);
  });
  test('Check "on"', () => {
    expect(getMatchedElements('on')).toEqual([
      'Malaysia, Port Dickson, The Andaman Resort',
      'Indonesia, BTDC, Nuca Dua, Black Penny Villas',
      'UK, London, Nox Hostel',
    ]);
  });
  test('Check "belarus"', () => {
    expect(getMatchedElements('belarus')).toEqual([]);
  });
  test('Check ""', () => {
    expect(getMatchedElements('')).toEqual([]);
  });
});

describe('Check getCalendarMonth-function', () => {
  const arr1 = [
    [27, 28, 29, 30, 1, 2, 3],
    [4, 5, 6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15, 16, 17],
    [18, 19, 20, 21, 22, 23, 24],
    [25, 26, 27, 28, 29, 30, 1],
  ];
  test('Check arr1', () => {
    expect(getCalendarMonth(30, 7, 4)).toEqual(arr1);
  });
  test('Check wrong info', () => {
    expect(getCalendarMonth(30, 5, 39)).toBe(false);
  });
});
