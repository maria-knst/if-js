//Task1
function palindrom(str) {
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

//Task2
const min = (a, b) => {
  if (a > b) {
    return b;
  }
  return a;
};
const max = (a, b) => {
  if (a > b) {
    return a;
  }
  return b;
};
//conditional operator
const min1 = (a, b) => (a > b ? b : a);
const max1 = (a, b) => (a > b ? a : b);

//Task3
const arr = [12, 52, 20, 18, 22, 100, 43, 57, 50, 0, 1];
let flag = false;

const changeZero = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let newNum = '';
    const res = String(arr[i]);
    for (let j = 0; j < res.length; j++) {
      if (res[j] === '0') {
        newNum += 'zero';
        flag = true;
      } else {
        newNum += res[j];
      }
    }
    if (flag === true) {
      arr[i] = newNum;
      flag = false;
    }
  }
  return arr;
};
