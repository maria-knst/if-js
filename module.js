//Task1
export function sum(num1) {
  function in_sum(num2) {
    if (typeof num2 === 'number' && typeof num1 === 'number') {
      return num1 + num2;
    }
    return false;
  }

  return in_sum;
}

const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];

export const getColor = (elem) => {
  if (elem >= colors.length) {
    elem = elem % colors.length;
  }
  return colors[elem];
};
