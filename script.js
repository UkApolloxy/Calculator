function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    const display = document.getElementById('display');
    try {
        // Use math.js or similar libraries for more complex calculations
        display.value = eval(display.value.replace('^', '**').replace('sqrt', 'Math.sqrt').replace('log', 'Math.log10').replace('sin', 'Math.sin').replace('cos', 'Math.cos').replace('tan', 'Math.tan'));
    } catch (e) {
        display.value = 'Error';
    }
}
