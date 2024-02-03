// Створення масиву
let tasks = [];

function addTask(task) {
  tasks.push(task);
}

function deleteTask(task) {
  const index = tasks.indexOf(task);
  if (index !== -1) {
    tasks.splice(index, 1);
  }
}

function displayTasks() {
  console.log("Список задач:");
  tasks.forEach((task, index) => {
    console.log(`${index + 1}. ${task}`);
  });
}

addTask("Вивчити JavaScript");
addTask("Розвинутися в програмуванні");
addTask("Створити власний веб-сайт");

// Виведення задач
displayTasks();

// Видалення однієї задачі
deleteTask("Вивчити JavaScript");

displayTasks();
