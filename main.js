//Task1
export function changeDate(date) {
  if(!(/(\d{4})-(\d{2})-(\d{2})/.test(date))){
    return false;
  }
  const regex = /(\d+)\.(\d+)\.(\d+)/;
  const newStr = date.replace(/-/g, '.');
  const result = newStr.replace(regex, '$3.$2.$1');
  return result;
}

const str = '2020-11-26';
changeDate(str);



//Task2


