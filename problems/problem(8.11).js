function getArr(num) {
  // Ваш код здесь
  let arr = [];
  for (let i = 0; num >= 0; i++, num--) {
    if (num % 3 === 0) {
      arr[i] = num;
    }
  }
  return arr;
}

console.log(getArr(15)); // [15, 12, 9, 6, 3, 0]
console.log(getArr(17)); // [15, 12, 9, 6, 3, 0]
console.log(getArr(22)); // [21, 18, 15, 12, 9, 6, 3, 0]
