//Author: Kevin Loría Paniagua


//Function
function multiplyArray(array) {
  var i;
  var result = new Array();
  for (i = 0; i < array.length; i++) {
    var product = 1;    
    var j;
    for (j = 0; j < array.length; j++) {
      if (j != i) {
         product = product * array[j];
      }      
    }
    result.push(product);
  }
  return result ;   
}

//Tests

//Test 1
a = [2, 3, 4, 6];
console.log(multiplyArray(a));

//Test 2
b = [123, 67, 890, 4];
console.log(multiplyArray(b));

//Test 1
c = [2, 3, 7, 9, 4, 5, 6, 9, 12];
console.log(multiplyArray(c));


