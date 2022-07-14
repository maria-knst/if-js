import { checkString } from "../src/js/stack_les16.js";

describe('Check stack function of checking objects', () => {
  test('Good object', ()=> {
    const str = '{user: {name: "John", age: 21}}';
    expect(checkString(str)).toBe(true);
  });
  test('Bad object', ()=> {
    const str = '{user: {name: }{"John", age: 21{}}';
    expect(checkString(str)).toBe(false);
  });
  test('Bad object1', ()=> {
    const str = '{user: }{name: "John", age: 21}}';
    expect(checkString(str)).toBe(false);
  });

});