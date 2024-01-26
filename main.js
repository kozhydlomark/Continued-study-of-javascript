// Завдання 1
let user = {};
user.name = "Іван";
user.surname = "Сміт";
user.name = "Петро";
delete user.name;

// Завдання 2
function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}

// Завдання 3
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

let sum = 0;
for (let key in salaries) {
  sum += selaries[key];
}

alert(sum);

// завдання 4
let obj = {
  1: 200,
  2: 600,
  4: 1000,
};

function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] == "number") {
      obj[key] *= 2;
    }
  }
}
