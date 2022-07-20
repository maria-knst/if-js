export const checkString = (str) => {
  const myStack = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '{') {
      myStack.push(str[i]);
    } else if (str[i] === '}') {
      if (myStack[myStack.length - 1] === '{') {
        myStack.pop();
      } else {
        return false;
      }
    }
  }
  return myStack.length === 0;
};
