const list = [
  { name: "create a post", status: "In progress", priority: "low" },
  { name: "test", status: "Done", priority: "high" },
];

function changeStatus(taskName, newStatus) {
  const taskIndex = list.findIndex((task) => task.name === taskName);

  if (taskIndex !== -1) {
    list[taskIndex].status = newStatus;
    console.log(`Статус задачи "${taskName}" изменен на "${newStatus}"`);
  } else {
    console.log(`Задача "${taskName}" не найдена`);
  }
}

function addTask(newTask) {
  const taskExists = list.some((task) => task.name === newTask.name);

  if (!taskExists) {
    list.push(newTask);
    console.log(`Добавлена новая задача "${newTask.name}"`);
  } else {
    console.log(`Задача "${newTask.name}" уже существует`);
  }
}

function deleteTask(taskName) {
  const taskIndex = list.findIndex((task) => task.name === taskName);

  if (taskIndex !== -1) {
    list.splice(taskIndex, 1);
    console.log(`Задача "${taskName}" удалена`);
  } else {
    console.log(`Задача "${taskName}" не найдена`);
  }
}

function showList() {
  const todoTasks = list.filter((task) => task.status === "To Do");
  const inProgressTasks = list.filter((task) => task.status === "In progress");
  const doneTasks = list.filter((task) => task.status === "Done");

  console.log("\nTo do:");
  todoTasks.forEach((task) => console.log(`"${task.name}"`));

  console.log("\nIn Progress:");
  inProgressTasks.forEach((task) => console.log(`"${task.name}"`));

  console.log("\nDone:");
  doneTasks.length > 0
    ? doneTasks.forEach((task) => console.log(`"${task.name}"`))
    : console.log("-");
}

addTask({ name: "go for groceries", status: "To Do", priority: "medium" });
changeStatus("create a post", "Done");
deleteTask("test");
changeStatus("nonexistent task", "To Do");

showList();
