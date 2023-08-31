/**
 * Q1. Falsy or Truthy?
 * Given two values, return the first one if its falsy, otherwise the second one
    filterOutFalsy(0, 500) => 0
    filterOutFalsy(false, 100) => false
    filterOutFalsy([true, "Dog"]) => "Dog"
*/

function  filterOutFalsy(value1, value2){
    // if (value1 && value2) {
    //     return value2
    // }
    // return value1

    // if (!value1) {
    //     return value1
    // }
    // return value2

    return !value1 ? value1 : value2 //one line
}
console.log(filterOutFalsy(true,"Dog"));

/**
 * Q2. Return the length of any given array
 * Given an array, return its length
 * 
 * arrlenght([1,2,3]) =>   3
 * arrlenght([1,3]) =>     2
 * arrlenght([]) =>        0
 */

function arrlength(array){
    return array.length
    }
console.log(arrlength([1,2,3,]));

/**
 * Q3. Get the last element in an aray
 * Given an array, return the first element
 */

function lastElem(arr){
    return (arr[arr.length - 1])
}

console.log(lastElem([3,2,0,6,2]));

/**
 * Q4 Find the sum of an array
 * Given an array, return the sum of every element
 */

function sumElem(arr){
    let sum = 0
    for (let i = 0; i < arr.length; i++) {

        sum = arr[i] + sum

    }
    return sum      //Raus aus der for schleife damit es sich summiert
}
console.log(sumElem([6,4,1]));

/**
 * Q5 Add up the numbers from a single number
 * Given a number, add up all the numbers from one to the number that is given.
 * E.g. An input of 4 will give you 1+2+3+4, which equals 10
    progressivSum(3) =>6
    progressivSum(600) => 180300
*/

function progressivSum(num){
let sum = 0
    for (let i = 0; i <= num; i++) {
        sum = sum + i
    }

return sum

}
console.log(progressivSum([600]));

/**
 * Q6
 */