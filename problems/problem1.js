// const userAnswer = prompt("Вам нравится JavaScript?");
// if (
//   userAnswer === "Да" ||
//   userAnswer === "да" ||
//   userAnswer === "Да, нравится" ||
//   userAnswer === "Нравится" ||
//   userAnswer === "нравится"
// ) {
//   alert("Конечно, отличный язык.");
// } else {
//   alert("Не нравится? Вы кнопкой ошиблись?");
// }

const userAnswer = confirm("Вам нравится JavaScript?");
if (userAnswer) {
  alert("Конечно, отличный язык.");
} else {
  alert("Не нравится? Вы кнопкой ошиблись?");
}
