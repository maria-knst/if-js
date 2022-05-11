import { sum, getColor } from './module.js';

console.log(sum(4)(3));

const text1 = document.getElementById('text1');
const text2 = document.getElementById('text2');
const text3 = document.getElementById('text3');

let count1 = 0;
let count2 = 0;
let count3 = 0;

text1.addEventListener('click', (event) => {
  event.target.style.background = getColor(count1);
  count1++;
});

text2.addEventListener('click', (event) => {
  event.target.style.background = getColor(count2);
  count2++;
});

text3.addEventListener('click', (event) => {
  event.target.style.background = getColor(count3);
  count3++;
});
