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
 * Q6
 * 
 * 
 */