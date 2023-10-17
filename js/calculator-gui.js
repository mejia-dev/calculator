// Main variable declarations
let inputVar = "";
let numberOfNumbers = 1;


// Data append functions

function appendValue(num1) {
  
  if (inputVar.includes(0) && (inputVar.length < 2) ) {
    inputVar = "";
    inputVar += num1.toString();
    document.getElementById("inputBox").innerText=inputVar.toString();
  }
  else {
    inputVar += num1.toString();
    document.getElementById("inputBox").innerText=inputVar.toString();
  }
}

function appendDecimal() {
  if (inputVar.includes(".") && ((inputVar.split(".").length -1) === numberOfNumbers)) {
    "";
  }
  else {
    inputVar += ".";
    document.getElementById("inputBox").innerText=inputVar.toString();
  }

}

// Data removal functions

function clearInput() {
  inputVar = "";
  inputVar = "0";
  document.getElementById("inputBox").innerText=inputVar.toString();
}


// Math Buttons
function buttonAdd() {
  inputVar += " + ";
  document.getElementById("inputBox").innerText=inputVar.toString();
  numberOfNumbers = (1 + numberOfNumbers);
}

function buttonSubtract() {
  inputVar += " - ";
  document.getElementById("inputBox").innerText=inputVar.toString();
  numberOfNumbers = (1 + numberOfNumbers);
}

function buttonMultiply() {
  inputVar += " * ";
  document.getElementById("inputBox").innerText=inputVar.toString();
  numberOfNumbers = (1 + numberOfNumbers);
}

function buttonDivide() {
  inputVar += " / ";
  document.getElementById("inputBox").innerText=inputVar.toString();
  numberOfNumbers = (1 + numberOfNumbers);
}