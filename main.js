// Завдання 1
const numbers = [1, 2, 3, 4, 5];

numbers.forEach((number) => {
  console.log(`Number is ${number}`);
});

// Завдання 2
const wordsArray = ["cat", "dog", "elephant", "tiger", "lion"];

const longWord = wordsArray.find((word) => word.length > 7);

if (longWord) {
  console.log(`Перше слово довжиною більше 7 символів: ${longWord}`);
} else {
  console.log("Не знайдено жодного слова довжиною більше 7 символів.");
}

// Завдання 3
const numbersArray = [1, 11, -2, 3, -10, 4];

const negativeNumbersArray = numbersArray.filter((number) => number < 0);

console.log("Масив від'ємних чисел:", negativeNumbersArray);

// Завдання 4
const numbersArray = [1, 11, -2, 3, -10, 4];

const absoluteValuesArray = numbersArray.map((number) => Math.abs(number));

console.log("Масив абсолютних значень:", absoluteValuesArray);

// Завдання 5
const numbersArray = [1, 11, -2, 3, -10, 4];

const compareFunction = (a, b) => b - a;

const sortedArray = numbersArray.sort(compareFunction);

console.log("За зменшенням:", sortedArray);