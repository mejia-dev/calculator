let inputVar = "";

function appendValue(num1) {
  
  if (inputVar.includes(0) && (inputVar.length < 2)) {
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
  if (inputVar.includes(".")) {
    "";
  }
  else {
    inputVar += ".";
    document.getElementById("inputBox").innerText=inputVar.toString();
  }

}

function clearInput() {
  inputVar = "";
  inputVar = "0";
  document.getElementById("inputBox").innerText=inputVar.toString();
}
