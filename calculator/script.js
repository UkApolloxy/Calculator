let isCalculated = false; // Flag to track if a calculation has been done

function appendToDisplay(value) {
    const display = document.getElementById('display');
    
    // If a calculation has been performed and a number is typed, reset the display
    if (isCalculated && !isNaN(value)) {
        display.value = value; // Replace display content with the new number
        isCalculated = false;  // Reset the flag
    } else if (value === 'DEL') {
        // Remove the last character from the display
        display.value = display.value.slice(0, -1);
    } else {
        // Append the value to the display for normal keys or operators
        display.value += value;
    }
    
    // If an operator is typed, allow chaining (don't reset the flag)
    if (isNaN(value) && value !== 'DEL') {
        isCalculated = false;  // Allow chaining calculations
    }
}

function clearDisplay() {
    document.getElementById('display').value = '';
    isCalculated = false; // Reset the flag
}

function calculate() {
    const display = document.getElementById('display');
    try {
        // Perform the calculation
        display.value = eval(display.value.replace('^', '**').replace('sqrt', 'Math.sqrt').replace('log', 'Math.log10').replace('sin', 'Math.sin').replace('cos', 'Math.cos').replace('tan', 'Math.tan'));
        isCalculated = true;  // Set the flag indicating a calculation was done
    } catch (e) {
        display.value = 'Error';
    }
}
