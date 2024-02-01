// Завдання 1

function ucFirst(str) {
  if (!str) return str;

  return str[0].toUpperCase() + str.slice(1);
}

console.log(ucFirst("василь")); // Василь

// Завдання 2

function checkSpam(str) {
  let lowerStr = str.toLowerCase();

  return lowerStr.includes("viagra") || lowerStr.includes("xxx");
}

alert(checkSpam("buy ViAgRA now"));
alert(checkSpam("free xxxxx"));
alert(checkSpam("innocent rabbit"));

// Завдання 3

function truncate(str, maxlength) {
  return str.length > maxlength ? str.slice(0, maxlength - 1) + "…" : str;
}

// Завдання 4

function extractCurrencyValue(str) {
  return +str.slice(1);
}

// Додаткове завдання

function showVerticalMessage(inputString) {
  for (let i = 0; i < inputString.length; i++) {
    console.log(inputString[i]);
  }
}

showVerticalMessage("strada");
