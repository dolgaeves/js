// "Мышка Б54": 2200
// "Клавиатура К22": 9400
// "Монитор М123": 52000

// const itemName = prompt("Какой товар вас интересует?");
// if (itemName.trim().toLocaleLowerCase() === "мышка б54") {
//   alert(`${itemName.trim()}: 2200 рублей`);
// } else if (itemName.trim().toLocaleLowerCase() === "клавиатура к22") {
//   alert(`${itemName.trim()}: 9400 рублей`);
// } else if (itemName.trim().toLocaleLowerCase() === "монитор м123") {
//   alert(`${itemName.trim()}: 52000 рублей`);
// } else {
//   alert(`Товар ${itemName.trim()} не найден`);
// }

const product = prompt("Какой товар вас интересует?");
switch (product.toLocaleLowerCase()) {
  case "мышка б54":
    alert("Мышка Б54 : 2200");
    break;
  case "клавиатура к22":
    alert("Клавиатура К22 : 9400");
    break;
  case "монитор м123":
    alert("Монитор М123 : 52000");
    break;
  default:
    alert(`Товар "${product}" не найден`);
}
