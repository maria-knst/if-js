//Task1
export function changeDate(date) {
  if (!/(\d{4})-(\d{2})-(\d{2})/.test(date)) {
    return false;
  }
  const regex = /(\d+)\.(\d+)\.(\d+)/;
  const newStr = date.replace(/-/g, '.');
  const result = newStr.replace(regex, '$3.$2.$1');
  return result;
}

//Task2
const data = [
  {
    country: 'Russia',
    city: 'Saint Petersburg',
    hotel: 'Hotel Leopold',
  },
  {
    country: 'Spain',
    city: 'Santa Cruz de Tererife',
    hotel: 'Apartment Sunshine',
  },
  {
    country: 'Slowakia',
    city: 'Vysokie Tatry',
    hotel: 'Villa Kunerad AinT',
  },
  {
    country: 'Germany',
    city: 'Berlin',
    hotel: 'Hotel Friendship',
  },
  {
    country: 'Indonesia',
    city: 'Bali',
    hotel: 'Ubud Bali Resort&SPA',
  },
  {
    country: 'Netherlands',
    city: 'Rotterdam',
    hotel: 'King Kong Hostel',
  },
  {
    country: 'Marocco',
    city: 'Ourika',
    hotel: 'Rokoko Hotel',
  },
  {
    country: 'Germany',
    city: 'Berlin',
    hotel: 'Hotel Rehberge Berlin Mitte',
  },
];

const str1 ='';

export function getMatchedElements(str1) {
  const arr = [];
  if(str1 === ''){
    return arr;
  }
  const regex1 = new RegExp(`${str1}`, 'i');
  for (let i = 0; i < data.length; i++) {
    if (
      regex1.test(data[i].country) ||
      regex1.test(data[i].city) ||
      regex1.test(data[i].hotel)
    ) {
      arr.push(data[i].country + ', ' + data[i].city + ', ' + data[i].hotel);
    }
  }
  return arr;
}

console.log(getMatchedElements(str1));