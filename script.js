const display = document.getElementById('display');

function updateDisplay(input) {
    display.value += input;
};

function clearDisplay(input) {
    display.value = "";
};

function backSpace(input) {
    let currentDisplay = display.value;
    currentDisplay = currentDisplay.slice(0, -1);
    display.value = currentDisplay;
};

function calculate(){

}