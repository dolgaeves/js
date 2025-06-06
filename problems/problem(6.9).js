console.log(getTimeBySeconds(783261));

function getTimeBySeconds(sec) {
  let secs = sec % 60;
  let mins = Math.trunc((sec % 3600) / 60);
  let hours = Math.trunc(sec / 3600);
  return `${fillZero(hours)}:${fillZero(mins)}:${fillZero(secs)}`;
}

function fillZero(num) {
  if (num < 10) {
    return `0${num}`;
  } else {
    return String(num);
  }
}

// padStart() - метод форматирования

str = "2";
console.log(str.padStart(2, "0")); // добавляет в начало то, что написано в втором аргументе, дополняет до 2 символов
