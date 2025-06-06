const max = 1;
const min = 6;
const n = Math.floor(Math.random() * (max - min + 1) + min);
const n1 = +prompt("Угадай число");
const n2 = n;
if (n1 >= 1 && n1 <= 5) {
  if (n1 === n) {
    alert(`Верно, я загадал число ${n}.`);
  } else {
    alert(`Нет, не ${n1}, я загадал число ${n2}.`);
  }
} else {
  alert("Необходимо было ввести целое число от 1 до 5 включительно.");
}
