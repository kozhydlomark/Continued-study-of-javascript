//  Завдння 1 перша тема

// Перепишіть з використанням стрілкових функцій
// Замініть Функціональні Вирази на стрілкові функції у коді нижче:

function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Ви згодні?",
  function () {
    alert("Ви погодились.");
  },
  function () {
    alert("Ви скасували виконання.");
  }
);

// Рішення

const ask = (question, yes, no) => {
  if (confirm(question)) yes();
  else no();
};

ask(
  "Ви згодні?",
  () => {
    alert("Ви погодились.");
  },
  () => {
    alert("Ви скасували виконання.");
  }
);

// Завдання 1 друга тема

// Відповідь: Помилка томущо вона має викликатися через крапку це раз а подруге вона виликається як функція а не як метод

// Завдення 2 друга тема

// Створіть калькулятор
// важливість: 5
// Створіть об’єкт calculator з трьома методами:

// read() запитує два значення та зберігає їх як властивості об’єкта з іменами a та b відповідно.
// sum() повертає суму збережених значень.
// mul() множить збережені значення і повертає результат.

let calculators = {
  // ... ваш код ...
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());

// Рішення:

let calculator = {
  sum() {
    return this.a + this.b;
  },

  mul() {
    return this.a * this.b;
  },

  read() {
    this.a = +prompt("a?", 0);
    this.b = +prompt("b?", 0);
  },
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());

// Завдання 3

// Ланцюг викликів
// важливість: 2
// Існує об’єкт ladder, що дозволяє підійматися вгору-вниз:

// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//   },
//   down() {
//     this.step--;
//   },
//   showStep: function() { // показує поточний крок
//     alert( this.step );
//   }
// };
// Тепер, якщо нам потрібно зробити кілька викликів послідовно, можна зробити це так:

// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep(); // 1
// ladder.down();
// ladder.showStep(); // 0
// Змініть код up, down і showStep так, щоб зробити доступним ланцюг викликів, наприклад:

// ladder.up().up().down().showStep().down().showStep(); // shows 1 then 0

// Рішення:

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep() {
    alert(this.step);
    return this;
  },
};

ladder.up().up().down().showStep().down().showStep();
