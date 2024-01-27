const list = {
  "створити нове практичне завдання": "В процесі",
  "зробити ліжко": "Зроблено",
  "написати пост": "Необхідно виконати",
};

function changeStatus(taskName, newStatus) {
  if (list.hasOwnProperty(taskName)) {
    list[taskName] = newStatus;
    console.log(`Статус  "${taskName}"  змінено на ${newStatus}`);
  } else {
    console.log(`Завдання "${taskName}"  не знайдено`);
  }
}

function addTask(taskName) {
  if (!list.hasOwnProperty(taskName)) {
    list[taskName] = "Необхідно виконати";
    console.log(`Завдання "${taskName}" додано`);
  } else {
    console.log(`Завдання "${taskName}" додано`);
  }
}

function deleteTask(taskName) {
  if (list.hasOwnProperty(taskName)) {
    delete list[taskName];
    console.log(`Завдання "${taskName}" Завдання`);
  } else {
    console.log(`Завдання "${taskName}"  не знайдено`);
  }
}

function showList() {
  if (Object.keys(list).length === 0) {
    console.log("Нічого немає у списку");
    return;
  }

  for (const taskName in list) {
    console.log(`${taskName}: ${list[taskName]}`);
  }
}

addTask("купити продукти");
addTask("прибрати вдома");
changeStatus("прибрати вдома", "В процесі");
showList();


