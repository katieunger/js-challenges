function FirstFactorial(num) { 
  if (num === 0) {
    return 1;
  }
  // This is it! Recursion!!
  return num * FirstFactorial(num - 1);
}
// keep this function call here 
var test1 = FirstFactorial(8);                            
var test2 = FirstFactorial(7);
console.log(test1);
console.log(test2);
