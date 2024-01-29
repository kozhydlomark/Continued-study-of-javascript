const STATUS = {
  TO_DO: "To Do",
  IN_PROGRESS: "In Progress",
  DONE: "Done",
};

const list = {
  "створити нове практичне завдання": STATUS.IN_PROGRESS,
  "зробити ліжко": STATUS.DONE,
  "написати пост": STATUS.TO_DO,
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
    list[task] = STATUS.TO_DO;
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
      case STATUS.TO_DO:
        todoTasks.push(task);
        break;
      case STATUS.IN_PROGRESS:
        inProgressTasks.push(task);
        break;
      case STATUS.DONE:
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
  if (doneTasks.length > 0) {
    for (const task of doneTasks) {
      console.log(`"${task}"`);
    }
  } else {
    console.log("-");
  }
}

addTask("йти за продуктами");
changeStatus("написати пост", STATUS.DONE);
deleteTask("зробити ліжко");
changeStatus("неіснуюче завдання", STATUS.TO_DO);

addTask("прочитати книгу");
addTask("вивчити новий навик");
addTask("вправи на 30 хвилин");

showList();
