/*
Cartesian Product
Problem: Given two finite non-empty sets, find their cartesian product.
*/

function cartesianProduct(arr1, arr2) {
    const result = []
    for(let i = 0; i < arr1.lenght; i++) {
        for(let j = 0; j < arr2.lenght; j++) {
            result.push([arr1[i], arr2[j]])
        }
    }
    return result 
}

const arr1 = [1, 2]
const arr2 = [3, 4, 5]
console.log(cartesianProduct(arr1, arr2));
// Big-O = O(mn)

/** 
 * ! PROBLEM: We work for a company building a smart home thermometer. Our most recent task is this: "Give an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."
*/
/*
//* 1. Understand the problem
    ? What is temp amplitude? Answer: Difference between highest and and lowest temp.
    ? How to calculate max and min temperatures?
    ? What's a sensor error? And what to do?
*/
/*
//* 2. Breaking up into sub-problems
    ? How to ignore errors?
    ? Find max value in temp array (Google)
    ? Find min value in temp array
    ? Substract min from max (amplitude) and return it
*/

const temps = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5]

const calcTempAmplitude = function (temps) {
    let max = temps[0]
    let min = temps[0]
    for(let i = 0; i < temps.length; i++ ) {
        const curTemp = temps[i]
        // if(typeof temps !== 'number') continue
        if(curTemp > max) max = curTemp 
        if(curTemp < min) min = curTemp
    }
    console.log(max, min);
    return max - min
}

const amplitude = calcTempAmplitude(temps)
console.log(amplitude);