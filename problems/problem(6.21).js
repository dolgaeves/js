// В данном задании вам предстоит реализовать функцию,
// которая будет возвращать нужное слово,
// в зависимости от переданного числа.
// Ваша функция должна принимать количество (целое число) и три формы слова,
// которые указывают на различные падежи.
// Цель функции — вернуть корректную форму слова в зависимости от указанного числа.

/**
 * Функция склонения слова для числительного.
 * @param {number} count - Числительное.
 * @param {string} one - Вариант слова для цифры один (например: 1 "яблоко").
 * @param {string} two - Вариант слова для цифры два (например: 2 "яблока").
 * @param {string} five - Вариант слова для цифры пять (например: 5 "яблок").
 * @returns {string} Склоненное слово в зависимости от числительного.
 */
function declinationOfNumber(count, one, two, five) {
  if (
    (count % 10 === 1 && count % 100 !== 11) ||
    (count % 10 === 1 && count % 100 === 1)
  ) {
    return one;
  } else if (count % 10 >= 2 && count % 10 < 5) {
    if (Math.trunc(count / 10) === 10) {
      return two;
    } else {
      if (Math.trunc(count / 10) >= 2 && Math.trunc(count / 10) < 5) {
        return two;
      } else {
        return five;
      }
    }
  } else {
    return five;
  }
}

// Ниже написан код, для проверки работоспособности функции.

{
  const count = 1;
  const word = declinationOfNumber(
    count,
    "сообщение",
    "сообщения",
    "сообщений"
  );
  // Должна получиться строка: Вам пришло 1 сообщение
  console.log(`Вам пришло ${count} ${word}.`);
}

{
  const count = 11;
  const word = declinationOfNumber(
    count,
    "сообщение",
    "сообщения",
    "сообщений"
  );
  // Должна получиться строка: Вам пришло 11 сообщений
  console.log(`Вам пришло ${count} ${word}.`);
}

{
  const count = 21;
  const word = declinationOfNumber(
    count,
    "сообщение",
    "сообщения",
    "сообщений"
  );
  // Должна получиться строка: Вам пришло 21 сообщение
  console.log(`Вам пришло ${count} ${word}.`);
}

{
  const count = 33;
  const word = declinationOfNumber(
    count,
    "сообщение",
    "сообщения",
    "сообщений"
  );
  // Должна получиться строка: Вам пришло 33 сообщения
  console.log(`Вам пришло ${count} ${word}.`);
}

{
  const count = 45;
  const word = declinationOfNumber(
    count,
    "сообщение",
    "сообщения",
    "сообщений"
  );
  // Должна получиться строка: Вам пришло 45 сообщений
  console.log(`Вам пришло ${count} ${word}.`);
}

{
  const count = 113;
  const word = declinationOfNumber(
    count,
    "сообщение",
    "сообщения",
    "сообщений"
  );
  // Должна получиться строка: Вам пришло 113 сообщений
  console.log(`Вам пришло ${count} ${word}.`);
}
