const list = {
  "створити нове практичне завдання": "В процесі",
  "зробити ліжко": "Зроблено",
  "написати пост": "Необхідно виконати",
};

function changeStatus(task, status) {
  if (list.hasOwnProperty(task)) {
    list[task] = status;
    console.log(`Статус задачі "${task}" змінено на "${status}"`);
  } else {
    console.log(`Задачу "${task}" не знайдено`);
  }
}

function addTask(task) {
  if (!list.hasOwnProperty(task)) {
    list[task] = "To Do";
    console.log(`Додано нову задачу "${task}"`);
  } else {
    console.log(`Задача "${task}" вже існує`);
  }
}

function deleteTask(task) {
  if (list.hasOwnProperty(task)) {
    delete list[task];
    console.log(`Задачу "${task}" видалено`);
  } else {
    console.log(`Задачу "${task}" не знайдено`);
  }
}

function showList() {
  const todoTasks = [];
  const inProgressTasks = [];
  const doneTasks = [];

  for (const [task, status] of Object.entries(list)) {
    switch (status) {
      case "To Do":
        todoTasks.push(task);
        break;
      case "In Progress":
        inProgressTasks.push(task);
        break;
      case "Done":
        doneTasks.push(task);
        break;
      default:
        break;
    }
  }

  console.log("\nTo do:");
  for (const task of todoTasks) {
    console.log(`"${task}"`);
  }

  console.log("\nIn Progress:");
  for (const task of inProgressTasks) {
    console.log(`"${task}"`);
  }

  console.log("\nDone:");
  for (const task of doneTasks) {
    console.log(`"${task}"`);
  }

  if (
    todoTasks.length === 0 &&
    inProgressTasks.length === 0 &&
    doneTasks.length === 0
  ) {
    console.log("Нічого не виконано");
  }
}

addTask("йти за продуктами");
changeStatus("написати пост", "Done");
deleteTask("зробити ліжко");
changeStatus("неіснуюче завдання", "To Do");

addTask("прочитати книгу");
addTask("вивчити новий навик");
addTask("вправи на 30 хвилин");


showList();
