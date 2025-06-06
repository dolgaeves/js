function getArr(num) {
  // Ваш код здесь
  let arr = [];
  while (num >= 0) {
    if (num % 3 === 0) {
      arr.unshift(num);
    }
    num -= 1;
  }
  return arr;
}

console.log(getArr(15)); // [15, 12, 9, 6, 3, 0]
console.log(getArr(17)); // [15, 12, 9, 6, 3, 0]
console.log(getArr(22)); // [21, 18, 15, 12, 9, 6, 3, 0]
