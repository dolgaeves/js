const arrayReverse = (arr) => {
  // Ваш код здесь
  let newarr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    newarr.push(arr[i]);
  }
  return newarr;
};

// Должны получить массив: [105, 104, 103, 102, 101]
console.log(arrayReverse([101, 102, 103, 104, 105]));
