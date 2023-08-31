/**
 *  Q1. Return the Sum of Two Numbers
 * Create a function that takes two arguments as functions and return their sum.
 * 
 * addition(3,2) =>5
 * addition(-3,-6)=>9
 * addition(7,3)=>10
 * */

let num1 = 3

function addition(num1, num2){
    return num1 + num2
}
console.log(addition(3,2));


/**
 * Q2. Convert Hours into Seconds
 * Create a function that converts hours into seconds
 * 
 * hoursIntoSeconds(2) => 7200
 * hoursIntoSeconds(10) => 36000
 * hoursIntoSeconds(24) => 86400
 */

function hoursIntoSeconds(num1, num2, num3){
    console.log(num1 * 3600) ;
    console.log(num2 * 3600) ;
    console.log(num3 * 3600) ;
}
console.log(hoursIntoSeconds(2, 10, 24));

/**
 * 
 * Q3. Calculate the Perimeter of a Rectangle
 * Create a function that takes length and width of revctangle and return its perimeter
 * calcPerimter(6,7) => 26
 */

function calcPerimeter(length, width){
    return (length * 2) + (width * 2);
}
console.log(calcPerimeter(6,7));

/**
 * 
 * Q4. Calculate the Area of a Triangle
 * Write a function that takes the base and height of a triangle and returns its area
 * 
 * calcTriangleArea(3,2) => 3
 * calcTriangleArea(10,10) => 50
 * calcTriangleArea(20,20) => 200
 * 
 * Take in two arguemnts, base & height
 * Formula to calculate area is 0.5 * base * height
 * Return the answer and console.log it
 * 
 */

function calcTriangleArea(base, height){
    return 0.5 * base * height
}
console.log(calcTriangleArea(10,10));

/**
 * Q5. Write a function accepts a string and adds "Frontend" onto the end of it
 * 
 * appendFronted("Apple") => "AppleFrontend"
 * 
 * Accept a string
 * Adding strings is similar to adding numbers
 * Dont forget to return your result
 */

function appendFrontend(apple, frontend){
    return apple + frontend
}
console.log(appendFrontend("Apple", "Frontend"));

/**
 * Q6 Greater than 100?
 * Given two numbers, return true if the sum of both numbers is greater than 100. Otherwise, return false
    sumGreaterThan100(20,10) => false
    sumGreaterThan100(50,60) => true
 * */

function sumGreaterThan100(num1, num2){
      return num1 + num2 >= 100 ? true : false

    //  if (num1 + num2 > 100) {
    //   return true   
    //  }
    //  return false
}
console.log(sumGreaterThan100(100,-50));

/**
 * Q7. Less than or Equal to Zero
 * Write a function that accepts a number and returns true if its less than or equal to zero, otherwise returns false
    lessThanOrEqualToZero(3) => false
    lessThanOrEqualToZero(0) => true
*/

function lessThanOrEqualToZero(num){
    return num <= 0
}
console.log(lessThanOrEqualToZero(3));

/**
 * Q8. Opposite boolean
 * Given a boolean, return the opposite boolean
 * oppositeBoolean(true) => false
 * oppositeBoolean(false) => true
 */

function oppositeBoolean(bool){
    // if (bool) {
    //     return false
    // }
    //  return true

    return !bool        // !bool ist immer das Gegenteil
}
console.log(oppositeBoolean(false));

/**
 * Q9. Is not the number 0
 * Given ANY element, return true if its NOT the number 0.
 * isNotZero(5) => true
 * isNotZero(0) => false
 * isNotZero(Null) => true
 */

function isNotZero(zero){
    // if (zero !== 0) {
    //     return true
    // }
    // return false

    return zero !== 0
}
console.log(isNotZero(5));


/**
 * Q10.
 * Calculate the remainer
 * Given two numbers, return their remainder when divided by each other
 * calcRemainder(4,2) = 0
 * calcRemainder(7,8) = 7
 * calcRemainder(9,8) = 1
 */

function calcRemainder(num1,num2){
    return num1 % num2
}
console.log(calcRemainder(9,8));

/**
 * Q11. Is the number odd
 * Given two numbers, return true if the number is odd
 * isOdd(1) = true
 * isOdd(2) = false
 * isOdd(3) = true
 * 
 */

function isOdd(num){
    // if (num % 2) {
    //     return true
    // }
    // return false

    return num % 2 !== 0
}
console.log(isOdd(3));

/**
 * Q12. If anumber is even, return 1 otherwise return -1
 * Create a function that takes a number argument and returns 1 if the number is even. If the number is odd return -1
 * booleanInteger(1) => -1
 * booleanInteger(2) => 1
 * booleanInteger(5) => -1
 */

function booleanInteger(num){
    // if (num % 2) {
    //     return -1
    // }
    // return 1

    return num % 2 ? -1 : 1  //one line  ternary operator
}
console.log(booleanInteger(2));

/**
 * Q13. Check if a user is logged in AND subscribed
 * Create a function that takes in two strings. If the first string is equal to "LOGGED_IN" AND the second string is equal to "SUBSCRIBED" return false.
 * 
 * isLoggedInandSubscribed("LOGGED_IN", "SUBSCRIBED") => true 
 * isLoggedInandSubscribed("LOGGED_IN", "UNSUBSCRIBED") => false
 * isLoggedInandSubscribed("LOGGED_OUT", "SUBSCRIBED") => false
 */

function isLoggedInandSubscribed(log, status){
    // if (log === "LOGGED_IN" && status === "SUBSCRIBED") {
    //     return true
    // }
    // return false

   return log === "LOGGED_IN" && status === "SUBSCRIBED" // one line
}
console.log(isLoggedInandSubscribed("LOGGED_IN", "SUBSCRIBED"));

/**
 * Q14.
 * Check if a user is logged in Or subscribed
 * Create a function that takes in two strings. If the first string is equal to "LOGGED_IN" AND the second string is equal to "SUBSCRIBED" return false.
 * 
 * isLoggedInOrSubscribed("LOGGED_IN", "SUBSCRIBED") => true 
 * isLoggedInOrSubscribed("LOGGED_IN", "UNSUBSCRIBED") => true
 * isLoggedInOrSubscribed("LOGGED_OUT", "UNSUBSCRIBED") => false
 */


function isLoggedInOrSubscribed(log, status){
   return log === "LOGGED_IN" || status === "SUBSCRIBED" // one line
}
console.log(isLoggedInOrSubscribed("LOGGED_OUT", "SUBSCRIBED"));