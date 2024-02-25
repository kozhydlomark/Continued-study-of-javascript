function calculate() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    const operator = document.getElementById('operator').value;
    let result;

    if (isNaN(num1) || isNaN(num2)) {
        alert('Будь ласка, введіть числа в обидва поля.');
        return;
    }

    if (num2 === 0 && operator === 'divide') {
        alert('На нуль ділити не можна!');
        return;
    }

    num1 = num1.toFixed(2);
    num2 = num2.toFixed(2);

    switch(operator) {
        case 'add':
            result = parseFloat(num1) + parseFloat(num2);
            break;
        case 'subtract':
            result = parseFloat(num1) - parseFloat(num2);
            break;
        case 'multiply':
            result = parseFloat(num1) * parseFloat(num2);
            break;
        case 'divide':
            result = parseFloat(num1) / parseFloat(num2);
            break;
        default:
            result = 'Invalid operator';
    }

    document.getElementById('result').value = result.toFixed(2);
}
