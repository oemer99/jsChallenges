/**
 * Q1 Show rating
 * Given a rating, display a star (*) for each full rating and fullstop (.) for each half rating
 */

function showRating(rating){
    let ratings = "";
    for (let i = 0; i < Math.floor(rating); i++) {
            ratings +=  "*"
        if (i !== Math.floor(rating) - 1) {
            ratings +=  " "
        }
    }
    if (!Number.isInteger(rating)) {
        ratings += " ."
    }
    return ratings;

}
console.log(showRating(2.5));

/**
 * Q2 Sort by lowest to highest price
 * Given an array of numbers, return the prices sorted by low to high
 */

function sortLowToHigh(arr){
 
    return arr.sort((a, b) => (a - b))
}
console.log(sortLowToHigh([20,40,10,30,10,-5,-10,5000]));

/**
 * Q3 Sort by highest to lowest price
    Given an array of objects, return the prices sorted by high to low
*/

function sortHighToLow(sort){
    return sort.sort((a, b) => ( b.price - a.price))
}
console.log(sortHighToLow([
    {id: 1, price: 50},
    {id: 2, price: 30},
    {id: 3, price: 60},
    {id: 4, price: 10},
]));

/**
 * Q4/5. Promises
 *  Find all the posts by a single user
 *  Call this API "https://jsonplaceholder.typicode.com/posts" and return all the posts by any given user Id
 */

const userIdRef = document.querySelector(".userId")

// async function main (){
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts")
//     const data = await response.json();
//     const posts = data.filter(element => element.userId === 4)
//     console.log(posts);

//     // userIdRef.innerHTML = data.userId
// }
//  main()

/**
 * Q6. Promises
 *  Call this API "https://jsonplaceholder.typicode.com/todos" and return the first 6 incomplete todo´s from the result
 */


async function main (){
    const response1 = await fetch("https://jsonplaceholder.typicode.com/todos")
    const data1 = await response1.json();
    const result = data1.filter(element => !element.completed).slice(0,6)
    console.log(result/*.slice(0,6)*/);     //.slice um von 0 bis N auswählen u können
}
 main()