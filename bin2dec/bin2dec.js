function convertToDec(input) {
    const parsed = parseInt(input, 2);
    const decResultDiv = document.getElementById("decResult");
    let resultHTML;

    if (isNaN(parsed)) {
        resultHTML = "<strong><font color='red'>Please enter a binary number</font></strong>"
    } else {
        resultHTML = `<strong>Binary number ${input} is ${parsed} in base 10</strong>`;
    }


    decResultDiv.innerHTML = resultHTML;
}

function validateInput(keyboardEvent) {
    const numberPressed = keyboardEvent.charCode || keyboardEvent.keyCode;

    if (numberPressed != 48 && numberPressed != 49 && numberPressed !== 13) {
        alert("Please enter only 1s and 0s");
        keyboardEvent.preventDefault();
    }
}