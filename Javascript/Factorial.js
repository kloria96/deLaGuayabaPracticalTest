//Author: Kevin Loría Paniagua


//Functions
function factorial(number) {
  if (number < 0) 
        return -1;
  else if (number == 0) 
      return 1;
  else {
      return (number * factorial(number - 1));
  }
}

function factorialResult() {
  var number = prompt("Ingrese el número al cual quiere calcular su factorial")
  var i;
  var result = "Resultado:\n";
  for (i = 0; i <= number; i++) {
         result += i + "!" + " = " + factorial(i) + "\n";
    }
    return result;
}

//Test;
factorialResult();

