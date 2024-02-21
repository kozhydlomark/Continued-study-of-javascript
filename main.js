// Завдання 1-2 в файлі index.html

// Завдання 3
// Відповідь: 1 та 2


						// Тема Треття 

// Практика просто пишу код
let selectedId;

table.onclick = function(event) {
	let target = event.target; 

	if (target.tahName != 'ID') return;

	highlight(target);
}

function highlight(td) {
	if(selectedId) {
		selectedId.classList.remove('highlight');
	}
	selectedId = td;
	selectedTd.classList.add('highlight');
}


// Завдання Треття статття

// Завдання 1

// Ось так це можна зробити 

container.onclick = function(event) {
      if (event.target.className != 'remove-button') return;

      let pane = event.target.closest('.pane');
      pane.remove();
    };

// клас remove-button це кнопка натискаючи на яку буде видалятися

// Завдання 2

// Приклад коду який надано в файлі index.html

// Рішення:

// помістіть кожен текстовий вузол у елемент <span>
    // він займає саме те місце, яке необхідне для тексту,
    for (let li of tree.querySelectorAll('li')) {
      let span = document.createElement('span');
      li.prepend(span);
      span.append(span.nextSibling); 
    }

    // ловимо кліки на всьому дереві
    tree.onclick = function(event) {

      if (event.target.tagName != 'SPAN') {
        return;
      }

      let childrenContainer = event.target.parentNode.querySelector('ul');
      if (!childrenContainer) return; 

      childrenContainer.hidden = !childrenContainer.hidden;
    }


// Завдання 3 

// рішення:

    grid.onclick = function(e) {
      if (e.target.tagName != 'TH') return;

      let th = e.target;

      sortGrid(th.cellIndex, th.dataset.type);
    };

    function sortGrid(colNum, type) {
      let tbody = grid.querySelector('tbody');

      let rowsArray = Array.from(tbody.rows);

      
      let compare;

      switch (type) {
        case 'number':
          compare = function(rowA, rowB) {
            return rowA.cells[colNum].innerHTML - rowB.cells[colNum].innerHTML;
          };
          break;
        case 'string':
          compare = function(rowA, rowB) {
            return rowA.cells[colNum].innerHTML > rowB.cells[colNum].innerHTML ? 1 : -1;
          };
          break;
      }

      // сортування
      rowsArray.sort(compare);

      tbody.append(...rowsArray);
    }

// Завдання 4 (Сама тяжке)

    let tooltipElem;

    document.onmouseover = function(event) {
      let target = event.target;

      let tooltipHtml = target.dataset.tooltip;
      if (!tooltipHtml) return;

      tooltipElem = document.createElement('div');
      tooltipElem.className = 'tooltip';
      tooltipElem.innerHTML = tooltipHtml;
      document.body.append(tooltipElem);

    
      let coords = target.getBoundingClientRect();

      let left = coords.left + (target.offsetWidth - tooltipElem.offsetWidth) / 2;
      if (left < 0) left = 0; 

      let top = coords.top - tooltipElem.offsetHeight - 5;
      if (top < 0) { 
        top = coords.top + target.offsetHeight + 5;
      }

      tooltipElem.style.left = left + 'px';
      tooltipElem.style.top = top + 'px';
    };

    document.onmouseout = function(e) {

      if (tooltipElem) {
        tooltipElem.remove();
        tooltipElem = null;
      }

    };


// Додаткове завдання 

    let timer; 
let seconds = 0; 

function startPauseTimer() {
    if (!timer) {
        timer = setInterval(updateTimer, 1000); 
    } else {
        clearInterval(timer); 
        timer = null;
    }
}

function stopTimer() {
    clearInterval(timer); 
    timer = null;
    seconds = 0; 
    console.log("Timer stopped");
}

function updateTimer() {
    seconds++; 
    console.log("Elapsed time: " + seconds + " seconds");
}
