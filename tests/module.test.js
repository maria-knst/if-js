import { sum, getColor } from '../module';
import { randNumber, randProductMaterial } from '@ngneat/falso';

test('Expected number', () => {
  expect(sum(randNumber())(randNumber())).not.toBeNaN();
  expect(sum(randNumber())(randProductMaterial())).toBeFalsy();
  expect(sum(randProductMaterial())(randNumber())).toBeFalsy();
});

test('Checked elements', () => {
  expect(getColor(randNumber())).toBeDefined();
});
