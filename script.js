const displayElement = document.getElementById("display");

/**
 * Clears the display.
 */
function clearDisplay() {
    displayElement.innerText = "0";
}

/**
 * Appends a value to the display. 
 * If the display shows "0", it replaces it with the new value.
 * @param {string} value - The value to append to the display.
 */
function appendToDisplay(value) {
    if (displayElement.innerText === "0") {
        displayElement.innerText = value;
    } else {
        displayElement.innerText += value;
    }
}

/**
 * Evaluates the expression on the display and shows the result.
 * If the expression is invalid, displays "Error".
 */
function calculateResult() {
    try {
        const result = eval(displayElement.innerText);
        displayElement.innerText = isNaN(result) ? "Error" : result;
    } catch (error) {
        displayElement.innerText = "Error";
    }
}
