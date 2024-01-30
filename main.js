// Завдання 1

let a = +prompt("Перше число?", "");
let b = +prompt("Друге число?", "");

alert(a + b);

// Завдання 3
// Повторюйте, поки вхід не буде числом
// важливість: 5
// Створіть функцію readNumber, яка запросить число, поки відвідувач не введе дійсне числове значення.

// Отримане значення потрібно повернути як число.

// Відвідувач також може зупинити процес, ввівши порожній рядок або натиснувши “CANCEL”. У цьому випадку функція повинна повернути null.

// Рішення:
function readNumber() {
  let num;

  do {
    num = prompt("Введіть число", 0);
  } while (!isFinite(num));

  if (num === null || num === "") return null;

  return +num;
}

alert(`Read: ${readNumber()}`);

//Завдання 4
// Випадковий безкінечний цикл
// важливість: 4
// Цей цикл безкінечний. Він ніколи не закінчується. Чому?

let i = 0;
while (i != 10) {
  i += 0.2;
}

// Рішення

// Це тому, що i ніколи не буде дорівнювати 10.
let i = 0;
while (i < 11) {
  i += 0.2;
  if (i > 9.8 && i < 10.2) alert(i);
}

// Завдання 5

function random(min, max) {
  return min + Math.random() * (max - min);
}

alert(random(1, 5));
alert(random(1, 5));
alert(random(1, 5));

// Завдання 7

function randomInteger(min, max) {
  let rand = min + Math.random() * (max - min);
  return Math.round(rand);
}

alert(randomInteger(1, 3));
