import { changeDate, getMatchedElements } from '../main';

describe('Check data format', () => {
  test('Data test 1', () => {
    expect(changeDate('2021-12-15')).toBe('15.12.2021');
  });
  test('Data test 2', () => {
    expect(changeDate('2022-05-17')).toMatch(/(\d+)\.(\d+)\.(\d+)/);
  });
  test('Data test 3', () => {
    expect(changeDate('Hello world')).toBe(false);
  });
});

describe('Check "find substring"-function', () => {
  test('Check "berlin"', () => {
    expect(getMatchedElements('berlin')).toEqual([
      'Germany, Berlin, Hotel Friendship',
      'Germany, Berlin, Hotel Rehberge Berlin Mitte',
    ]);
  });
  test('Check "aint"', () => {
    expect(getMatchedElements('aint')).toEqual([
      'Russia, Saint Petersburg, Hotel Leopold',
      'Slowakia, Vysokie Tatry, Villa Kunerad AinT',
    ]);
  });
  test('Check ""', () => {
    expect(getMatchedElements('')).toEqual([]);
  });
});
