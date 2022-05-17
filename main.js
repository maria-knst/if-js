export function changeDate(date) {
  const regex = /(\d+)\.(\d+)\.(\d+)/;
  const newStr = date.replace(/-/g, '.');
  const result = newStr.replace(regex, '$3.$2.$1');
  return result;
}

const str = '2020-11-26';
changeDate(str);
