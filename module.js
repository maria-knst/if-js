import { colors } from './main.js';

const text1 = document.getElementById('text1');
const text2 = document.getElementById('text2');
const text3 = document.getElementById('text3');

text1.addEventListener('click', (event) => {
  event.target.style.color = colors.next().value;
});

text2.addEventListener('click', (event) => {
  event.target.style.color = colors.next().value;
});

text3.addEventListener('click', (event) => {
  event.target.style.color = colors.next().value;
});
