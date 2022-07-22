/*
Fibonacci Sequence
Problem: Given a number 'n', find the first 'n' elements of the fibonacci sequence.
*/
function fibonacci(n) {
    const fib = [0, 1]
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2]
    }    
    return fib
}

console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(5));
console.log(fibonacci(6));
console.log(fibonacci(7));
console.log(fibonacci(10));
// Big-O = O(n)

/* 
Factorial of a number
Problem: Given an integer 'n', find the factorial of that integer.
*/
function factorial(n) {
   let result = 1
   for (let i = 2; i <= n; i++) {
       result = result * i
   }
   return result 
}
console.log(factorial(0))
console.log(factorial(1))
console.log(factorial(5))
console.log(factorial(6))
// Big-O = O(n)

/*
Primer Number
Problem: Give a natural number 'n', determine if the number is prime or not.
*/
function isPrime(n) {
    if (n < 2) {
        return false
    }
    for(i = 2; i < n; i++) {
        if(n % i === 0) {
            return false
        }
        return true
    }
}
console.log(isPrime(1));
console.log(isPrime(2));
console.log(isPrime(3));
console.log(isPrime(4));
console.log(isPrime(5));
console.log(isPrime(6));
console.log(isPrime(7));
console.log(isPrime(8));
console.log(isPrime(9));
console.log(isPrime(10));
console.log(isPrime(11));

/*
Power of Two
Problem: Give a positive integer 'n', determine if the number is a power of 2 or not.
*/
function isPowerOfTwo(n) {
    if(n < 1) {
        return false
    }
    while (n > 1) {
        if (n % 2 !== 0) {
            return false
        }
        n = n / 2
    }
    return true
}

console.log(isPowerOfTwo(1));
console.log(isPowerOfTwo(2));
console.log(isPowerOfTwo(5));
console.log(isPowerOfTwo(8));
// Big-O = O(logn)

/*
Recursive Fibonacci Sequence
Problem: Given a number 'n', find the nth element of the fibonacci sequence.
*/
function recursiveFibonacci(n) {
    if(n < 2) {
        return n
    }
    return recursiveFibonacci(n-1) + recursiveFibonacci(n-2)
}
console.log(recursiveFibonacci(0));
console.log(recursiveFibonacci(1));
console.log(recursiveFibonacci(6));
console.log(recursiveFibonacci(7));
console.log(recursiveFibonacci(8));

/*
Recursive Factorial of a number
Problem: Give an integer 'n', find the factorial of that integer.
*/
function recursiveFactorial(n) {
    if(n === 0) {
        return 1
    }
    return n * recursiveFactorial(n-1)
}

console.log(recursiveFactorial(0));
console.log(recursiveFactorial(1));
console.log(recursiveFactorial(5));
console.log(recursiveFactorial(8));
// Big-O = O(n)

/*
Linear Search
Problem: Given an array of 'n' elements and a target element 't', find the index of 't' in the array. Returun -1 if the target element is not found.
arr = [-5, 2, 10, 4, 6], t = 10 -> Should retrun 2
                        , t = 6 -> Should retrun 4
                        , t = 20 -> Should retrun -1
*/


// const arr = [-5, 2, 10, 4, 6]
// function linearSearch(t) {
//     for(let i = 0; i < arr.length; i++) {
//         if (arr[i] === t) {
//             return i
//         }
//     }
//     return -1
// }

// console.log(linearSearch(10));
// console.log(linearSearch(2));
// console.log(linearSearch(3));
// Big - O = O(n) Linear 

/*
Binary Search
Problem: Given a sorted array of 'n' elements and a target element 't', find the index of 't' in the array. Return -1 if the target element is not found.
*/
function binarySearch(arr, t) {
    let leftIndex = 0
    let rightIndex = arr.length - 1

    while(leftIndex <= rightIndex) {
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
        if(t === arr[middleIndex]) {
            return middleIndex
        }
        if(t < arr[middleIndex]) {
            rightIndex = middleIndex - 1
        } else {
            leftIndex = middleIndex + 1
        }
    }
    return -1
}
console.log(binarySearch([-5, 2, 4, 6, 10], 10)); //4
console.log(binarySearch([-5, 2, 4, 6, 10], 6)); //3
console.log(binarySearch([-5, 2, 4, 6, 10], 20)); //-1
// Big - O = O(logn)

/*
Recursive Binary Search
Problem: Given a sorted array of 'n' elements and a target element 't', find the index of 't' in the array. Return -1 if the target element is not found.
*/


/*
Bubble Sort
Problem: Given an array of integers, sort the array.
*/

function bubbleSort(arr) {
    let swapped
    do {
        swapped = false
    for(let i = 0; i < arr.length - 1; i++) {
        if(arr[i] > arr[i + 1]) {
            let temp = arr[i]
            arr[i] = arr[i+1]
            arr[i+1] = temp
            swapped = true
        }
    }
} while(swapped)
}

// const arr = [8, 20  , -2, 4, -6]
// bubbleSort(arr)
// console.log(arr); // [-6, -2, 4, 8, 20]
// Big-O = o(n^2)

/*
Insertion Sort
Problem: Given an array of integers, sort the array.
*/ 

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let numberToInsert = arr[i]
        // Here j refers to the index of the sorted element that is on the left side
        let j = i - 1
        while(j >= 0 && arr[j] > numberToInsert) {
            arr[j + 1] = arr[j]
            j = j - 1
        }
        arr[j+1] = numberToInsert
    }
}

// const arr = [8, 20, -2, 4, -6]
// insertionSort(arr)
// console.log(arr);
// Big-O = O(n^2)

/*
Quick Sort
Problem: Given an array of integers, sort the array.
*/ 

function quickSort(arr) {

    // This is base case for recursion
    if (arr.length < 2) {
        return arr
    }
    let pivot = arr[arr.length - 1]
    let left = []
    let right = []
    for(let i = 0; i < arr.length - 1; i++) {
        if(arr[i] < pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)]
}

const arr = [8, 20, -2, 4, -6]
console.log(quickSort(arr));
// Worst case - O(n^2)
// Avg case - O(nlogn)

/*
Merge Sort
Problem: Given an array of integers, sort the array.
*/ 

