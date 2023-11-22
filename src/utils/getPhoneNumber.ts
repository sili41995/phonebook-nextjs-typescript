const getPhoneNumber = (number = '') =>
  number
    .split('')
    .filter((symbol) => symbol === '+' || symbol !== '-')
    .join('');

export default getPhoneNumber;
