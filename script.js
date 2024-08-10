const display = document.getElementById("display");

function appendToDisplay(input) {
    // Handle backspace (DEL) if needed
    if (input === 'DEL') {
        display.value = display.value.slice(0, -1);
    } else {
        display.value += input;
    }
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        // Evaluate the expression safely
        display.value = eval(display.value);
    } catch (error) {
        // Handle errors (e.g., syntax errors) in the expression
        display.value = 'Error';
    }
}
