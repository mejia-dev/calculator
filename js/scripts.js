// business logic
function add(number1, number2) {
  return number1 + number2;
}

function subtract(number1, number2) {
  return number1 - number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}

function divide(number1, number2) {
  return number1 / number2;
}

// user interface logic 
const number1 = parseInt(prompt("Enter a number:"));
const number2 = parseInt(prompt("Enter another number: "));

// window.alert("The addition of your numbers is: " + add(number1, number2) + ". The subtraction of your numbers is : " + subtract(number1, number2) + ". The multiplication of your numbers is: " + multiply(number1, number2) + ". The division of your numbers is: " + divide(number1, number2) + ".")



// window.alert("The addition of your numbers is: " + add(number1, number2) + ". The subtraction of your numbers is : " + subtract(number1, number2) + ". The multiplication of your numbers is: " + multiply(number1, number2) + ". The division of your numbers is: " + divide(number1, number2) + ".")


window.alert(
  number1 + " + " + number2 + " = " + add(number1, number2) + ", " + 
  number1 + " - " + number2 + " = " + subtract(number1, number2) + ", " +
  number1 + " * " + number2 + " = " + multiply(number1, number2) + ", " +
  number1 + " / " + number2 + " = " + divide(number1, number2) + ", "
  )
