function getNearestToMax(arr) {
  // Ваш код здесь
  let newarr = [];
  let m = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > m) {
      m = arr[i];
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (m - arr[i] < m * 0.1 && arr[i] !== m) {
      newarr.unshift(arr[i]);
    }
  }

  return newarr;
}

console.log(getNearestToMax([5, 88, 95, 100, 77, 21, 92])); // [95, 92]
console.log(getNearestToMax([2, 13, 95, 29, 19, 5, -5])); // []
