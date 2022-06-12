import Students from '../main.js';
import { User, Student } from '../main.js';

describe('Check "fullName" function', () => {
  test('First check', () => {
    const user1 = new User({ firstName: 'Maria', lastName: 'Knst' });
    expect(user1.fullName).toEqual('Maria Knst');
  });
});

describe('Check "getInfo" function', () => {
  test('Check array of students', () => {
    const arr = [
      new Student({
        firstName: 'Ivan',
        lastName: 'Ivanov',
        admissionYear: 2020,
        courseName: 'JavaScript',
      }),
      new Student({
        firstName: 'Vasily',
        lastName: 'Petrov',
        admissionYear: 2021,
        courseName: 'Java',
      }),
      new Student({
        firstName: 'Aleksander',
        lastName: 'Fedorov',
        admissionYear: 2019,
        courseName: 'Python',
      }),
      new Student({
        firstName: 'Nikolay',
        lastName: 'Petrov',
        admissionYear: 2021,
        courseName: 'Android',
      }),
    ];

    const group = new Students(arr);

    const result = [
      'Vasily Petrov - Java, 1 course',
      'Nikolay Petrov - Android, 1 course',
      'Ivan Ivanov - JavaScript, 2 course',
      'Aleksander Fedorov - Python, 3 course',
    ];

    expect(group.getInfo()).toEqual(result);
  });
});
