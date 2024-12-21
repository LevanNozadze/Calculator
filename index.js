const display = document.getElementById("display");


function appendToDisplay(input) {
    const lastChar = display.value.slice(-1);
    
    if (['+', '-', '*', '/', '.'].includes(input)) {
        if (['+', '-', '*', '/', '.'].includes(lastChar)) {
            return;
        }
    }
    display.value += input;
}

function clearDysplay() {
    display.value = "";
}

const inputField = document.getElementById("myInput");

inputField.addEventListener("input", function() {
  this.disabled = true;
});

function calculate() {
    try {
        display.value = eval (display.value)
    }
    catch(error) {
        display.value = "Error"
    }
}