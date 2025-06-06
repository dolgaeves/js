// // @ts-check - проверяет типы данных
"use strict"; // Данная фраза включает более строгий режим JS

let number = 5,
  str = "Привет";
console.log(number, str);

let num = 65;
console.log(num);
num = 10;
console.log(num);

// let input_num = prompt("Введи число");
// console.log(input_num);

// Const-переменные лучше создавать первыми, потом можно будет поменять
const odd = 100;
console.log(odd);

// Этот метод устарел, поэтому используем только let и const
var even = 25;
console.log(even);

// Правила наменования переменных
// 1) Символы по типу: +, -, =, %, !, * и т.д. нельзя использовать в названии переменных
// 2) $, _ - только эти два символа можно использовать
// 3) Переменная не должна начинаться с цифры
// 4) В названии переменной нельзя использовать уже зарезервированные ключевые слова. Например, const или let

// Способы назвать переменную
let username = "Ванька"; // flat case - используется для коротких названий переменных
let user_name = "Ванька"; // snake case - тоже неплохой вариант, но лучше использовать camel case
let UserName = "Ванька"; // Pascal Case - используется для определения функций и классов
// let user-name = "Ванька"; // kebab case - не используется, так как таким образом просто не получится задать переменную

let userName = "Ванька"; // camel case - фаворит, так можно назвать любые перемнные

const PI = 3.1415; // Название реальных констант пишется большими буквами(также можно описать и констванты, которые точно не будут меняться)

// const data; - так писать нельзя

// time = "23:00"; // Переменную можно задать и так, в таком случае JS создаст её автоматически, но лучше так не делать, поскольку можно запутаться в коде

let numberOdd;
numberOdd = 5;

// Важно придерживаться единого стиля в коде.  Когда код написан как будто его писал один человек, облегчается работа с кодом, его проще читать, сопровождать и не будет споров внутри команды, вроде "тут пробела быть не должно!".

// Если не понимаете, где ошибка, то используйте отладчик(F12 в браузере -> вкладка Sources)

let str1 = "123";
str1 = "321";
// str1 = prompt("Введи новую строку");
// debugger;
console.log(str1);
str1 = "как дела?";
// debugger;
// alert(str1);

// При работе с отладчиком (дебагером) в VSCode используются следующие сочетания горячих клавиш:

// F5 - Запустить отладку (Start Debugging).
// Shift + F5 - Остановить отладку (Stop Debugging).
// F10 - Выполнить шаг не заходя в функцию (Step Over).
// F11 - Выполнить шаг с входом функцию (Step Into).
// Shift + F11 - Выйти из функции (Step Out).
// Ctrl + Shift + F5 - Перезапустить отладку (Restart Debugging).
// Ctrl + K, Ctrl + I - Показать подсказку по переменной (Show Hover).
// Ctrl + Shift + Y - Открыть панель отладки (Debug Console).

// Типы данных
// 1) number - число
// 2) string - строка
// 3) boolean - булев тип данных(true / false)
// 4) bigInt - большое число(чтобы дать понять компьютеру, что мы хотим использовать этот тип данных, в конце числа ставим букву n)
// 5) symbol - символ
// 6) undefiend - пустота(ничего не определили)
// 7) null - пустота(в переменной нет ничего)
// 8) object - составной тип данных, включает в себя все типы, которые описаны выше

console.log(typeof str); // Оператор typeof показывает тип данных той или иной переменной
// Замечание: если положить в перменную значение null, то typeof выведет object - это ошибка, её оставили специально, и она особо ни на что не влияет
// Также если положить в переменную значение function () {}, то в результате получим function

// Тип number
// Как записать число в JS?

num = 1_000_000; // с помощью разделителей
console.log(num);
num = 1e6; // с помощью e(читается - 1 и 6 нулей)
console.log(num);
num = 1e-6; // с помощью e(читается - 6 нулей и 1(0.000001))
console.log(num);
// Если записать в переменную слишком большое или слишком маленькое число, то JS его сократит
num = 1e9;
console.log(num);

// Также числа можно записывать в разных системах счисления
console.log(0x123afd); // - шестнадцатиричная система
console.log(0o1425342513); // - восьмиричная система
console.log(0b1010010101); // - двоичная система

console.log(0.6); // - дробное число

// Варианты записи нуля
console.log(0);
console.log(-0);

// Infinity, NaN и превращение числа в строку

console.log(1e1000);
console.log(50 / 0); // В этих трех случаях, мы получим бесконечность
console.log(50 / -0);

let num1 = 50 / 2;
console.log(Number.isFinite(num1)); // Проверяем бесконечное ли число
let num2 = 50 / 0;
console.log(Number.isFinite(num2));

num = 50 / "Привет";
console.log(num, typeof num, num == NaN); // В этом случае мы получим NaN - Not a Number. Такое значение не равно ничему, даже самому себе

console.log(Number.isNaN(num)); // Проверяем на NaN

const num3 = 46;
console.log(num3); // ------------\
console.log(num3.toString()); //---|
console.log(num3.toString(2)); //--|
console.log(num3.toString(8)); //--|---> Превести в строку
console.log(num3 + ""); // --------|
console.log((45).toString()); // -----|
console.log((56).toString()); // ---/

str = "123";
console.log(str);
console.log(+str);
console.log(Number(str));
str = "  123  "; // Такие пробелы проигнорирутся
console.log(str);
console.log(+str);
console.log(Number(str));
str = "  1 23  "; // Пробелы между цифрами недопустимы
console.log(str);
console.log(+str);
console.log(Number(str));
str = "+123"; // Знаки можно оставить
console.log(str);
console.log(+str);
console.log(Number(str));
str = "-123"; // Знаки можно оставить
console.log(str);
console.log(+str);
console.log(Number(str));
str = "123.123"; // Дробная часть сохраняется
console.log(str);
console.log(+str);
console.log(Number(str));
str = "0xfe5"; // Числа можно записать в разних системах счисления
console.log(str);
console.log(+str);
console.log(Number(str));
str = "Infinity"; // В этом случае получим Infinity
console.log(str);
console.log(+str);
console.log(Number(str));
str = " "; // В этом случае получим 0
console.log(str);
console.log(+str);
console.log(Number(str));

str = "12.345";
console.log(Number.parseInt(str)); // Превращает в целое число. Отбрасывает дробную часть
console.log(Number.parseFloat(str)); // Превращает в целое число. Не отбрасывает дробную часть
// Второй аргумент в Number.parseInt - это система счисления, в которой записано число в строке, люди считают и работают в десятичной системе счисления.

// Неточность вычислений
console.log(2 ** 53 - 1); // После 2 ** 53 начинаются неточные вычисления
console.log(Number.MAX_SAFE_INTEGER);
console.log(2 ** 53 + 1);
console.log(2 ** 53 + 2);
console.log(2 ** 53 + 3);
console.log(Number.MAX_VALUE);
console.log(0.1 + 0.2); // Получим 0.30000000000000004

// Округление чисел
console.log(12.345);
console.log(Math.round(12.345)); // Округление, как в математике
console.log(Math.round(12.745));
console.log(Math.floor(12.345)); // Округление вниз
console.log(Math.ceil(12.345)); // Округление вверх
console.log(Math.trunc(12.345)); // Отбрасывает дробную часть
num = 24.4562;
console.log(Math.trunc(num * 100) / 100); // Округление до 2 знаков после запятой
console.log(num.toFixed(2));

let price = 6.39;
let quantity = 81;
let totalPrice = price * quantity;
console.log(Number(totalPrice.toFixed(2)));

// Минимальное, максимальное и случайное значения
console.log(Math.max(12, 34, 4, 64, 23, 86)); // max
console.log(Math.min(12, 34, 4, 64, 23, 86)); // min
console.log(Math.trunc(Math.random() * 100)); // random
const max = 100;
const min = -100;
console.log(Math.floor(Math.random() * (max - min + 1) + min)); // random in range from -100 to 100

// Тип string

const str2 = "Приветик"; // Можно использовать одинарные ковычки ''
const str3 = "Приветик";
const str4 = `Приветик`;

const count = 5;
console.log("У меня есть " + count + " яблок"); // Конкатенации строк
console.log(`У меня есть ${count} яблок`);
console.log(`У меня есть ${count + 2} яблок`);

str = `
Приветик.
Пока
`;
console.log(str); // Перенос строки

str = "Привет\nПока";
console.log(str); // Перенос строки

console.log('Привет "Павел"'); // Можно писать и так
console.log("Привет 'Павел'");
console.log('Привет "Павел"');
console.log(`Привет
  \tПока`); // Знак табуляции

// Углубление в строки. Как превратить в строку что угодно.

num = 25.25;
console.log(num.toString());
console.log(String(num));
console.log(String(true));
str = "Привет, друг!";
console.log(str.length); // Длина строки
console.log(str[0]); // Вывести определенный символ
console.log(str.at(1));
console.log(str.at(-1));
console.log(str[str.length - 1]);
console.log(str[50]);
// Строки изменить не получится, то есть нельзя поменять отдельный символ в строке
// str[0] = "g" - так нельзя
console.log(str.toLocaleLowerCase()); // Перевести всё в нижний регистр.
console.log(str.toLowerCase());
console.log(str.toLocaleUpperCase()); // Перевести всё в верхний регистр
console.log(str.toUpperCase());
// .toLocaleLowerCase и .toUpperCaseCase будут предпочтительнее для использования
str = "  Привет, друг!  ";
console.log(str);
console.log(str.trim()); // Убирает лишние пробелы
console.log(str.trim().repeat(10));

// Тип bigInt
console.log(Number.MAX_SAFE_INTEGER); // Если число больше этого
console.log(Number.MIN_SAFE_INTEGER); // или меньше этого,
// то используем bigInt
const bigNum = 123473284732875298347982374982374n; // Создали число в bigInt
// Тип bigInt можно складывать, умножать, делить и вычитать только с числами типа bigInt
// JS не преобразовывает bigInt в другие типы данных
console.log(BigInt(60)); // Преобразовать в bigInt
// !!! + - не переводит bigInt в number, а Number() - переводит
// При делении bigInt дробная часть откидывается

// Тип boolean
// Имеет только 2 значания: true и false

const greaterThen = 5 > 3;
console.log(greaterThen);

const lowerThen = 5 < 3;
console.log(greaterThen);

console.log(Boolean(5)); // Превратить в булев тип данных
console.log(Boolean(0)); // В этом случае будет false
// В любом случае будет true, кроме 0, "", null, undefined, NaN

// Тип symbol

const sym1 = Symbol("hello");
console.log(sym1);
const sym2 = Symbol("hello");
console.log(sym2);
console.log(sym1 == sym2);
// Эти символы разные, даже если они имеют одно и тоже значение

// Типы null и undefined
let a;
console.log(a);
// !!! В const нужно обязательно положить значение
// Важно!!!
// 0 - число
// undefined - ничего не положили
// null - пустота(типа пустой корзины)

// Тип object
const user = {
  firstName: "Павел",
  lastName: "Тарасов",
  age: "34",
};
console.log(user);

// Autoboxing - процесс преобразования примитивных типов данных в объекты
// У null и indefined нет методов, никаких

// Операторы и операнды

// Инструкция - выражение из букв или символов, которое говорит, что делать в коде
// = - оператор присваивания
// num и 5(например) - операнды, то, чем мы оперируем
// Унарный оператор - оператор, у которого только 1 операнд
// Бинарный оператор - оператор, у которого 2 операнда
// Тернарный оператор - оператор, у которого 3 операнда

// Математические операторы
// -, +, *, /, **, ** 0.5, %
console.log(5 - 3); // вычитание
console.log(5 + 3); // сложение
console.log(5 * 3); // умножение
console.log(5 / 3); // деление
console.log(5 ** 3); // степень
console.log(5 ** 0.5); // корень
console.log(5 % 3); // остаток от деления
console.log(9.23 % 1);
console.log(1231231 % 10);
console.log(1231231 % 100);
console.log(1231231 % 1000);
console.log(1231231 % 10000);

// Оператор сложения
console.log(5 + 5);
console.log("Privet, " + "drug!"); // Priver, drug!
console.log("5" + 5); // В данном случает число превратится в строку, так работате только с +, с остальными будет так - все превратиться в числа
console.log(`Если к числу ${num} прибавить 5, то получится ${num + 5}`); // Важно, чтобы num был типом number
console.log(NaN + 20); // Получим NaN

// Конкатенация строк в JavaScript
// Итак, конкатенация строк — это процесс объединения двух или более строк в одну. Конкатенировать строки можно не только с помощью оператора +, но и с помощью встроенного метода concat(), который доступен для строк, этот метод позволяет объединять несколько строк в одну. Однако, заранее скажу - лучше использовать оператор +, а не метод concat().

// const str_1 = "Я очень люблю ";
// const str_2 = "JavaScript.";
// const result_ = str_1.concat(str_2);

// console.log(result_); // Вывод: Я очень люблю JavaScript.

// В этом примере мы создали две строки: str1 и str2. Затем мы использовали метод concat(), чтобы объединить их в одну строку, которая была сохранена в переменной result. В результате мы получили строку "Я очень люблю JavaScript.".

// Один момент по поводу строк str1 и str2 - они не изменятся (это и невозможно, строки иммутабельны, то есть, неизменяемы), метод concat() всегда создает новую строку.

// Можно объединять сразу несколько строк:

// str_1 = "Вперед, JavaScript";
// str_2 = "сконкатенируй все в этом мире!";
// const str_3 = ":)";
// result_ = str_1.concat(", ", str_2, " ", str_3);

// console.log(result_); Вывод: Вперед, JavaScript, сконкатенируй все в этом мире! :)

// В этом примере мы создали три строки: str1, str2 и str3. Мы использовали метод concat(), чтобы объединить их в одну строку, которая была сохранена в переменной result. В результате мы получили строку "Вперед, JavaScript, сконкатенируй все в этом мире! :)".

// Обратите внимание
// Метод concat() не очень быстрый, поэтому рекомендуется использовать оператор + для конкатенации.

// Метод concat() существует не только для работы со строками, такой же метод есть, например, у массивов (про это позже), однако, если вы попытаетесь использовать его с числами, вы получите ошибку, так как у чисел нет метода concat(). Например:

// const num_1 = 5;
// const num_2 = 10;

// const result = num_1.concat(num_2); // Это вызовет ошибку

// Оператор присванивания

// num = 5;
// let tmp = null;
// result_ = tmp = num;
// console.log(result_);
// console.log(tmp); // Результат 5 и 5

num += 10;
console.log(num);
num -= 2;
console.log(num);
num *= 10;
console.log(num);
num /= 8;
console.log(num);
num **= 2;
console.log(num);

// Инкремент, декремент и запятая

num = 5;
let newNum = null;
newNum = num++; // Прибавить 1 - инкремент
console.log(newNum); // - вернется старое значение
newNum = num--; // Вычесть 1 - декремент
console.log(newNum);
newNum = ++num; // - преинкремент
console.log(newNum); // - вернется новое значение
newNum = --num;
console.log(newNum); // - предекремент

let users = 10,
  accounts = 11;
num = (2 + 2, 3 + 3); // положит последнее значение
console.log(num);

// Оператор сравнения

console.log(5 > 2); // больше
console.log(5 < 2); // меньше
console.log(5 <= 2); // меньше или равно
console.log(5 >= 2); // больше или равно
console.log(5 == 2); // равно
console.log(5 === 2); // тоже равно
console.log(5 != 2); // неравно
console.log(5 !== 2); // тоже не равно

// Различие между ===(!==) и ==(!=) в том, что == преобразовыет всё в один тип данных

console.log(2 == "2");
console.log(2 === "2");
console.log(2 != "2");
console.log(2 !== "2");

// Лучше использовать === и !==, сравнивать строки со строками, а числа с числами

console.log(null == 0); // false
console.log(null > 0); // false
console.log(null >= 0); // true

// Операторы сравнения играют ключевую роль в логике программирования. Они позволяют нам сравнивать значения и принимать решения на основе этих сравнений. Важно понимать, как работают различные операторы, чтобы избежать неожиданных результатов.

// Использование Object.is()
// Кроме стандартных операторов сравнения, в JavaScript есть метод Object.is(), который позволяет сравнивать значения более строго, чем ===. Этот метод учитывает некоторые особенности, такие как различие между +0 и -0, а также NaN, который считается равным только самому себе. Например:

// console.log(0 === -0); // true
// console.log(Object.is(0, -0)); // false

// console.log(NaN === NaN); // false
// console.log(Object.is(NaN, NaN)); // true
// Использование Object.is() может быть полезно в ситуациях, когда вам нужно более точно определить равенство значений.

// Имейте ввиду
// Лучше всего избегать неявных преобразований типов - используйте строгие операторы сравнения, это === и !==.
// Если вам нужно более точное сравнение, используйте Object.is(), однако, я настоятельно рекомендую всегда использовать оператор ===.

// Сравнение строк

console.log("a" === "a"); // true
console.log("a" === "ab"); // false
console.log("в" > "б"); //  В данном случае сравниваются коды букв
console.log("привет" > "Привет"); // true
console.log("лор" > "лоб"); // слова сравниваются побуквенно
console.log("javascript" > "java"); // если буквы совпадают, сравниваются длины строк
console.log("javascript" > "javascript"); // false, т.к. длины равны
console.log("a".codePointAt(0)); // вывести код буквы
console.log("aфвавфыа".codePointAt(2));
console.log(String.fromCodePoint(1100)); // получить букву по коду
console.log("ё" > "я"); // код буквы ё больше, чем код буквы я
console.log("ёлки-палки".localeCompare("ялки-палки")); // правильное сравнение
// .localeCompare: -1 - false; 0 - ===; 1 - true

// Операторы И, Или, Не (AND, OR, NOT)

const first = 5;
console.log(first < 0 || first > 3); // first меньше, чем 0, или first больше, чем 3
// || - логическое "или"
// console.log(0 < first < 9); - так писать нельзя, т.к. 0 < first - true, а true < 9 - несравнимые типы
firstName = "Павел";
lastName = "Тарасов";
console.log(firstName === "Павел" && lastName === "Тарасов");
// && - логическое "и"
console.log(!true);
console.log(!false);
// ! - логическое "не"

// Как работает логическое "или" - ||
// false получается только в том случае, когда все условия ложны, иначе - всегда true

console.log(`Выражение "100 || 0", результат ${100 || 0}`); // реузьтатом будет 100, т.к. любое число кроме 0 правдиво
console.log(`Выражение "100 || 0", результат ${10 || 100}`); // результатом будет 10, т.к. это первое прадивое значение
console.log(`Выражение "100 || 0", результат ${0 || 100}`);
console.log(`Выражение "0 || 0", результат ${0 || 0}`); // результатом будет 0, т.к. JS вернет последнее значение, если правдивых не нашлось
console.log(
  `Выражение "0 || 50 || NaN || null", результат ${0 || 50 || NaN || null}`
);
console.log(
  `Выражение "0 || 100 || true || NaN", результат ${0 || 100 || true || NaN}`
);
console.log(
  `Выражение "0 || NaN || false || null", результат ${
    0 || NaN || false || null
  }`
);
// JS останавливает ципочку из "или", когда находит первое правдивое значение

b = 0;
b ||= 5;
console.log(b);

username = null;
username = username || "Аноним";
console.log(username); // результат "Аноним"

console.log(!0);

// Как работает логическое "и" - &&
// true получается только в том случае, когда все условия правдивы, иначе - всегда false

console.log(
  `Выражение "50 && "hi" && null && 5", результат ${50 && "hi" && null && 5}`
);
console.log(
  `Выражение "50 && "hi" && NaN && false", результат ${
    50 && "hi" && NaN && false
  }`
);
console.log(
  `Выражение "50 && "hi" && true && 5", результат ${50 && "hi" && true && 5}`
);
// если есть ложные выражения, то возвращается первое их них
// если все правдивы, то возвращается последнее их них

let userRole = "Администратор";
userRole === "Администратор" && console.log("Ты можешь всё!");

userRole = null;
false && console.log("Ты можешь всё!"); // так лучше не писать

userRole = "Администратор";
userRole &&= `${userRole} - красавчик`; // так лучше не писать
console.log(userRole);

// ?? - оператор нулевого слияния

// userName = prompt("Введите свое имя");
// console.log(`Привет, ${userName || "Аноним"}`);

let messagesCount = 10;
console.log(
  `Количество непрочитанных сообщений: ${messagesCount || "неизвестно"}.`
);

messagesCount = 0;
console.log(
  `Количество непрочитанных сообщений: ${messagesCount ?? "неизвестно"}.`
); // в этом случае, если будет слева будет null или undefined, то выведется то, что справа, и наоборот

console.log(null ?? 5); // 5
console.log(undefined ?? 10); // 10
console.log(false ?? 20); // false

userName = null;
userName ??= "Аноним";
console.log(userName); // "Аноним"

console.log(null ?? undefined ?? "Привет");

// ?? - оператор нулевого слияния нельзя использовать с обычными логическими опрераторами напрямую, нужно ставить скобки

// Приоритет и ассоциативность операторов

console.log(1 + 1 * 2); // - в этом случае приоритет будет такой же, как и в математике
console.log((1 + 1) * 2);
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Operator_precedence - статья про приоритет
console.log(5 - 1 - 2); // в этом случае ассоциативность слева направо

a = 1;
b = 2;
c = 3;
a = b = c; // тут ассоциативность справа налево
console.log(a, b, c);

// Побитовые операторы

// Это операторы, которые управляют битами в двоичной системе счисления

num = 124;
console.log(num.toString(2));

// Логика: if-else

// const lang = prompt("Какой у вас любимый язык программирования?");
// if (lang === "javascript") {
//   console.log("Конечно, это лучший язык в мире!"); // такая конструкция называется "ветвление"
// } else {
//   console.log("Вы уверены? ;)");
// }

// Виды ветвления
// 1) if () {}
// 2) if () {} else {}
// 3) if () {} elif () {} else {} - количество elif неограничено

if (num === 5) console.log(num); // - можно писать и так, но нежелательно, лучше с фигурними скобками

// messagesCount = +prompt("Сколько сообщений нужно отправить?");
// if (messagesCount > 0) {
//   console.log(`Отправляем сообщения в количестве ${messagesCount} шт.`);
// } else if ((messagesCount = 0)) {
//   console.log(`Отправляем сообщения в количестве 0 шт.`);
// }

// Структура выполнения ветвления if-else
// Проверяем условие -> если попали в if, то выполняем, то что написано после условия, а если нет, то идем дальше, в else if, снова проверяем условие, если выполнено, то запускаем, то что стоит после else if, если нет, то идем в блок else и сразу выполняем то, что стоит после, без проверки

// Тернарный оператор

// userRole = "USER";
// let accessAllowed;
// if (userRole === "ADMIN") {
//   accessAllowed = true;
// } else {
//   accessAllowed = false;
// }
// console.log(accessAllowed);

// userRole = "USER";
// let accessAllowed = false;
// if (userRole === "ADMIN") {
//   accessAllowed = true;
// }
// console.log(accessAllowed);

userRole = "ADMIN";
let accessAllowed = userRole === "ADMIN" ? true : false; // - тернарный оператор
console.log(accessAllowed);
// Тернарный оператор ? : - до вопроса пишется условие, если оно правдиво, то выполняем то, что перед двоеточием, а если - нет, то то, что после
// Такое опрератор оставляет после себя значение либо то, что после вопрса, либо то, что после двоеточия
// Большие условия лучше так не писать, так как можно запутаться
if (accessAllowed === true) {
  // можно записать так - (accessAllowed) (без === true)
  console.log("Доступ разрешен");
} else {
  console.log("Доступ запрещён");
}

accessAllowed ? console.log("Доступ разрешен") : console.log("Доступ запрещён");
// console.log(accessAllowed ? "Доступ разрешен" : "Доступ запрещён");

accessAllowed = userRole === "ADMIN";
console.log(accessAllowed ? "Доступ разрешен" : "Доступ запрещён");
console.log(`Доступ ${accessAllowed ? "разрешен" : "запрещён"}`);

// Неправильное использование тернарного оператора

const gener = "ужасы";
gener === "ужасы"
  ? console.log("БУУУ!")
  : gener === "комедия"
  ? console.log("Я тоже люблю посмеяться :)")
  : gener === "боевик" || gener === "детектив"
  ? console.log("Да, это тоже интересно")
  : console.log("Я не знаю таких жанров"); // так писать не надо, это затруднит чтение кода

// Оператор switch

// Работает аналогично if-else ветвлению

// if (gener === "ужасы") {
//   console.log("БУУУ!");
// } else if (gener === "комедия") {
//   console.log("Я тоже люблю посмеяться :)");
// } else if (gener === "боевик" || gener === "детектив") {
//   console.log("Да, это тоже интересно");
// } else {
//   console.log("Я не знаю таких жанров");
// }

switch (gener) {
  case "ужасы":
    console.log("БУ!");
    break;
  case "комедия":
    console.log("Я тоже люблю посмеяться :)");
    break;
  case "боевик":
    console.log("Да, это тоже интересно");
    break;
  case "детектив":
    console.log("Да, это тоже интересно");
    break;
  default:
    console.log("Я не знаю таких жанров");
}

// Если убрать break, то остановки на нужном case не будет и программа выведет все, что стоит после нужного условия

switch (gener) {
  case "ужасы":
    console.log("БУ!");
  case "комедия":
    console.log("Я тоже люблю посмеяться :)");
  case "боевик":
    console.log("Да, это тоже интересно");
  case "детектив":
    console.log("Да, это тоже интересно");
  default:
    console.log("Я не знаю таких жанров");
}

switch (gener) {
  case "ужасы":
    console.log("БУ!");
    break;
  case "комедия":
    console.log("Я тоже люблю посмеяться :)");
    break;
  case "боевик": // аналог логического "или" в конструкции switch
  case "детектив":
    console.log("Да, это тоже интересно");
    break;
  default:
    console.log("Я не знаю таких жанров");
}

// Сравнение в switсh идет через ===

switch (5) {
  case 1:
    console.log(1);
    break;
  case "5":
    console.log("Строка 5");
    break;
  case 5:
    console.log("Число 5");
}

// Использование switch (true)

// Операторы сравнения в явном виде в switch использовать не получится, можно сделать так

num = 10;
switch (
  true // вот такая хитрость
) {
  case num === 5 || num === 10:
  // ...
  case num > 10 && num < 20:
  // ...
  case num > 5:
  // ...
}
