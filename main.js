// Завдання 1
let name = "Іван";

function sayHi() {
  alert("Привіт, " + name);
}

name = "Петро";

sayHi(); // що вона покаже "Іван" чи "Петро"?

// Відповідь вона побачить Петро

// Завдання 2
function makeWorker() {
  let name = "Петро";

  return function () {
    alert(name);
  };
}

let name = "Іван";

// створити функцію
let work = makeWorker();

// Відподь: Петро

// Завдання 3
function makeCounter() {
  let count = 0;

  return function () {
    return count++;
  };
}

let counter = makeCounter();
let counter2 = makeCounter();

alert(counter()); // 0
alert(counter()); // 1

alert(counter2()); // ?
alert(counter2()); // ?

// викликати її
work(); // Що вона покаже?

// Відповідь:0 та 1

// Завдання 4

function Counter() {
  let count = 0;

  this.up = function () {
    return ++count;
  };
  this.down = function () {
    return --count;
  };
}

let counter = new Counter();

alert(counter.up()); // ?
alert(counter.up()); // ?
alert(counter.down()); // ?

//Відповідь: Він буде працювати і покаже 1, 2 та 1

// Завдання 5

let phrase = "Привіт";

if (true) {
  let user = "Іван";

  function sayHi() {
    alert(`${phrase}, ${user}`);
  }
}

sayHi();

//Відповідь: Резульат помилка бо функція оголошена в середині if і вона доступна тільки там за {} її не має

// Завдання 6

function sum(a) {
  return function (b) {
    return a + b;
  };
}
alert(sum(1)(2));
alert(sum(5)(-1));

// Відповідь функції 3 та 4

// Завдання 7
let x = 1;

function func() {
  console.log(x); // ?

  let x = 2;
}

func();

// Результат помилка

// завдання 8
function inArray(arr) {
    return function(x) {
      return arr.includes(x);
    };
  }
  
  let arr = [1, 2, 3, 4, 5, 6, 7];
  alert( arr.filter(inArray([1, 2, 10])) ); // 1,2

//Завдання 9
function byField(fieldName){
    return (a, b) => a[fieldName] > b[fieldName] ? 1 : -1;
  }
