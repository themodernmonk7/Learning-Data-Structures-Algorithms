/*
Fibonacci Sequence

Problem: Given a number 'n', find the first 'n' elements of the fibonacci sequence.

In mathematics, the fibonacci sequence in which each number is the sum of the two preceding ones.
The first two numbers in the sequence are 0 and 1.
Fibonacci (2) = [0, 1]
Fibonacci (3) = [0, 1, 1]
Fibonacci (7) = [0, 1, 1, 2, 3, 5, 8]
*/

const fibonacciSequence = (n) => {
  const commonNumber = [0, 1] 
  // Run the for loop on given array from at index 2
  for(let i = 2; i < n; i++) {
    commonNumber[i] = commonNumber[i - 1] + commonNumber[i - 2]
  }
  return commonNumber
}

console.log(fibonacciSequence(2));
console.log(fibonacciSequence(3));
console.log(fibonacciSequence(4));


/*
Factorial of a number

Problem: Give an integer 'n', find the factorial of that integer.

In mathematics, the factorial of a non-negative integer 'n', denoted n!, is the product of all positive integers less than or equal to 'n',

Factorial of zero is 1.
factorial(4) = 4*3*2*1 = 24
factorial(5) = 5*4*3*2*1 = 120

*/

const factorialNumber = (n) => {
  let result = 1
  for (let i=2; i<=n; i++) {
    result = result * i
  }
  return result
  }
  
  // console.log(factorialNumber(2)); // 2*1 = 2
  // console.log(factorialNumber(3)); // 3*2*1 = 6
  // console.log(factorialNumber(4)); // 4*3*2*1 = 24
  console.log(factorialNumber(5)); // 5*4*3*2*1 = 120
// console.log(factorialNumber(6)); // 6*5*4*3*2*1 = 720
