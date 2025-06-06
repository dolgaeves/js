function getFrequentlyRepeatedSymbol(str) {
  const symbolFrequency = {};
  for (let i = 0; i < str.length; i++) {
    symbolFrequency[str[i]] = 0;
  }

  for (let key in symbolFrequency) {
    for (let i = 0; i < str.length; i++) {
      if (key === str[i]) {
        symbolFrequency[key] += 1;
      }
    }
  }
  let m = 0;
  let c = "";
  for (let [i, j] of Object.entries(symbolFrequency)) {
    if (j > m) {
      c = i;
      m = j;
    }
  }

  return c;
}

console.log(getFrequentlyRepeatedSymbol("кодили-кодили, да ненакодили")); // и
console.log(
  getFrequentlyRepeatedSymbol(
    "Карл у Клары украл кораллы, Клара у Карла украла кларнет"
  )
); // а
