// Ось ваш JavaScript код

    // Отримати посилання на поле результату
    const resultField = document.getElementById('result');

    // Отримати всі кнопки чисел, операторів та дій
    const numberButtons = document.querySelectorAll('.number');
    const operatorButtons = document.querySelectorAll('.operator');
    const clearButton = document.getElementById('clear');
    const equalButton = document.getElementById('equal');

    // Додати обробник подій для кожної кнопки чисел
    numberButtons.forEach(button => {
        button.addEventListener('click', () => {
            resultField.value += button.textContent;
        });
    });

    // Додати обробник подій для кожної кнопки оператора
    operatorButtons.forEach(button => {
        button.addEventListener('click', () => {
            resultField.value += button.textContent;
        });
    });

    // Додати обробник події для кнопки очищення
    clearButton.addEventListener('click', () => {
        resultField.value = '';
    });

    // Додати обробник події для кнопки рівності
    equalButton.addEventListener('click', () => {
        try {
            const result = eval(resultField.value); // Використовуємо функцію eval для обчислення виразу
            resultField.value = result;
        } catch (error) {
            resultField.value = 'Помилка';
        }
    });