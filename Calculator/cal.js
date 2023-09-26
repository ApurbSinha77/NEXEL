function addToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        const result = eval(display.value);
        document.getElementById('history').textContent = display.value + ' = ' + result;
        display.value = result;
    } catch (error) {
        document.getElementById('history').textContent = 'Error';
        display.value = '';
    }
}