let user = 'John Doe';
console.log(user);

const student = 'Maria';
console.log(student);

user = student; // user = "Maria"
console.log(user);
console.log('__________');

let test = 1;
console.log(test);

++test;
console.log(test);

test += '1'; // test = 21
console.log(test);

test -= 1; //test = 20
console.log(test);

test = !!test; // test = true
console.log(test);
console.log('__________');

const arr = [2, 3, 5, 8];
let res = 1;

for (let i = 0; i < arr.length; i++) {
  res *= arr[i];
}

console.log(res);
console.log('__________');

const arr1 = [2, 5, 8, 15, 0, 6, 20, 3];
for (let i = 0; i < arr1.length; i++) {
  if (arr1[i] >= 5 && arr1[i] < 10) {
    console.log(arr1[i]);
  }
}
console.log('__________');

const arr2 = [2, 5, 8, 15, 0, 6, 20, 3];

for (let i = 0; i < arr2.length; i++) {
  if (arr2[i] % 2 === 0) {
    console.log(arr2[i]);
  }
}
console.log('__________');
