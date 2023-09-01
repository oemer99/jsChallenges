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
 * Q6 Calculate the time
 * Given a number in seconds, return this number in mm::ss format
 * calcTime(66) => "01:06"
 */

function calcTime(time)
{
    let seconds = time % 60
    let minutes = Math.floor(time / 60);
    
    if (minutes.toString().length === 1) {
        minutes = "0" + minutes
    }

    if (seconds.toString().length === 1) {
        seconds =  "0" + seconds 
    }

    return minutes + ":" + seconds
}
console.log(calcTime(7878));

/**
 * Q7. Find the largest number 
 * Given an  array of numbers, return the largest number of that array
 *  
 */

function getMax(num){

    return Math.max.apply(null, num);
}
console.log(getMax([50, -100, 66]));

/**
 * Q8 (schwierig). Reverse a string
 * Given a string, return the reversed strin
 */

function reverseString(str){

    // Incrementing Loop(Standard)
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
        newStr =  str[i] + newStr 
    }
    return newStr;
}

    //  Decrementing Loop (Unusual)
    // let newStr = "";
    // for (let i = str.length - 1; i >= 0; i--) {
    //     newStr = newStr + str[i] 
    // }
    // return newStr;
// }
console.log(reverseString("abc"));


/**
 * Q9. Turn every element in an array into 0
 * Given an array of elements, return the same length array filled with 0's
 */

function convertToZeros(zero){
   
    // for (let i = 0; i < zero.length; i++) {
    //     zero[i] = 0
    // }
    // return zero;
    
    // console.log(zero.fill(0));

    // .map extremly important  .map(elem => elem * 2)
    map = zero.map((x) => x * 0)
    return map

}
console.log(convertToZeros([5,100,3]));

/**
 * Q10. Filter out all the apples
 * Given an array of fruits, if its an apple remove it from the array.
 */

function removeApples(remove){

    // let noApples = []
    // for (let i = 0; i < remove.length; i++) {
    //     if (remove[i] !== "Apple") {
    //         noApples.push(remove[i])        
    //     }
    // }
    // return noApples

    // Filter genau wie bei map!!! .filter(elem => elem !== "Apple")
    return remove.filter(elem => elem !== "Apple");

    // oder auch
    // return remove.filter(elem => {
    //   return  elem !== "Apple"
    // } );

}
console.log(removeApples(["Banana", "Apple", "Orange" , "Apple"]));

/**
 * Q11. Filter out all the falsy values
 * Given an array of values, filter out all the falsy values and only return the truthy values
 */

function filterOutFalsy(arr){
    
    // return arr.filter(elem => elem !== "Apple")
    
    arrTruthy = []
    for (let i = 0; i < arr.length; i++) {
        if (!arr[i] == false) {
           arrTruthy.push(arr[i])
        }
    }
    return arrTruthy
}
console.log(filterOutFalsy(['', 0, null, undefined, "0"]));


function convertToBoolean(convert) {

    emptyArr = []
    for (let i = 0; i < convert.length; i++) {
        if (!!convert[i]) {             // !! um zu schauen ob es true ist
            emptyArr.push(true)
        }        
        else if (!convert[i]) {         // ! um zu schauen ob es false ist
            emptyArr.push(false)
        }
    }
    return emptyArr

    // return convert.map(elem => !!elem)   //!! um zu schauen ob es true oder false ist

}
console.log(convertToBoolean([500,300,0,"ömer", "", []]));