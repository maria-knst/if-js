import { sum, getColor } from '../module';
import { randNumber, randProductMaterial } from '@ngneat/falso';


describe('Color function check', () => {
  test('Expected number', () => {
    expect(sum(randNumber())(randNumber())).not.toBeNaN();
  });
  test('Expected false with parameters (number)(string)', () => {
    expect(sum(randNumber())(randProductMaterial())).toBeFalsy();
  });
  test('Expected false with parameters (string)(number)', () => {
    expect(sum(randProductMaterial())(randNumber())).toBeFalsy();
  });
});

describe('Sum function check', () => {
  test('Checked elements', () => {
    expect(getColor(randNumber())).toBeDefined();
  });
});
