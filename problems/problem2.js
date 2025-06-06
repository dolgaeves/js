// const userName = prompt("Введите ваше имя");
// if (userName === null || userName === undefined) {
//   alert("Введено неверное имя.");
// } else {
//   alert(`Добро пожаловать, ${userName}!`);
// }

const userName = prompt("Введите ваше имя");
if (userName && userName.trim()) {
  alert(`Добро пожаловать, ${userName.trim()}!`);
} else {
  alert("Введено неверное имя.");
}
