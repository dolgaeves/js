// let userAge = prompt("Введите свой возраст");

// if (userAge === null || userAge === undefined) {
//   alert("Вы не ввели свой возраст");
// }

// userAge = +userAge;

// if (userAge >= 0 && userAge < 18) {
//   alert("Привет! :)");
// } else if (userAge >= 18 && userAge < 50) {
//   alert("Здравствуйте!");
// } else if (userAge >= 50 && userAge < 100) {
//   alert("Почетный возраст");
// } else if (userAge >= 100) {
//   alert("А столько живут?");
// } else {
//   alert("Вы не ввели свой возраст");
// }

const userAge = +prompt("Введите свой возраст");

if (userAge < 18) {
  alert("Привет! :)");
} else if (userAge < 50) {
  alert("Здравствуйте!");
} else if (userAge < 100) {
  alert("Почетный возраст");
} else {
  alert("А столько живут?");
}
