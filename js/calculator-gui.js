// Main variable declarations
let inputVar = "";
let numberOfNumbers = 1;
let currentResult = 0;
let lastResult = "null";


// Data append functions

function appendValue(num1) {

  if (inputVar.includes(0) && (inputVar.length < 2)) {
    inputVar = "";
    inputVar += num1.toString();
    document.getElementById("inputBox").innerText = inputVar.toString();
  }
  else {
    inputVar += num1.toString();
    document.getElementById("inputBox").innerText = inputVar.toString();
  }
}

function appendDecimal() {
  if (inputVar.includes(".") && ((inputVar.split(".").length - 1) === numberOfNumbers)) {
    "";
  }
  else {
    inputVar += ".";
    document.getElementById("inputBox").innerText = inputVar.toString();
  }

}


// Data removal functions

function clearInput() {
  inputVar = "";
  inputVar = "0";
  numberOfNumbers = 1;
  document.getElementById("inputBox").innerText = inputVar.toString();
}

function backSpace() {
  if (isNaN(parseInt(inputVar.slice(-1))) && !(inputVar.slice(-1)).includes(".") ) {
    inputVar = inputVar.substring(0, inputVar.length - 3);
    numberOfNumbers = (numberOfNumbers - 1);
    document.getElementById("inputBox").innerText = inputVar.toString();
    if (inputVar === "") {
      inputVar = "0";
      document.getElementById("inputBox").innerText = inputVar.toString();
    }
  }
  else {
    inputVar = inputVar.substring(0, inputVar.length - 1);
    document.getElementById("inputBox").innerText = inputVar.toString();
    if (inputVar === "") {
      inputVar = "0";
      numberOfNumbers = 1;
      document.getElementById("inputBox").innerText = inputVar.toString();
    }
  }

}


// Math Buttons
function buttonAdd() {
  inputVar += " + ";
  numberOfNumbers = (1 + numberOfNumbers);
  document.getElementById("inputBox").innerText = inputVar.toString();
}

function buttonSubtract() {
  inputVar += " - ";
  numberOfNumbers = (1 + numberOfNumbers);
  document.getElementById("inputBox").innerText = inputVar.toString();
}

function buttonMultiply() {
  inputVar += " * ";
  numberOfNumbers = (1 + numberOfNumbers);
  document.getElementById("inputBox").innerText = inputVar.toString();
}

function buttonDivide() {
  inputVar += " / ";
  numberOfNumbers = (1 + numberOfNumbers);
  document.getElementById("inputBox").innerText = inputVar.toString();
}

function buttonEquals() {
  currentResult = eval(inputVar);
  document.getElementById("lastResult").innerText = currentResult.toString();
  // inputVar += " / ";
  // numberOfNumbers = (1 + numberOfNumbers);
  // document.getElementById("inputBox").innerText = inputVar.toString();
}