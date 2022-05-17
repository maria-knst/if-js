import { changeDate } from '../main';

describe('Check data format', () => {
  test('Data test 1', () => {
    expect(changeDate('2021-12-15')).toBe('15.12.2021');
  });
  test('Data test 2', () => {
    expect(changeDate('2022-05-17')).toMatch(/(\d+)\.(\d+)\.(\d+)/);
  });
});
