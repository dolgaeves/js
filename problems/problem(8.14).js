const randomShuffle = (arr) => {
  // Ваш код здесь
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

const myArr = [1, 2, 3, 4, 5];
randomShuffle(myArr);

// тот же массив, с теми же значениями, в случайном порядке
console.log(myArr);
