

// const num = [1,2,3,4,5,6,7,8]
// const str = ["ram", "prasad", "brahma","sai", "phani","mohana"]
// // foreach
// // Purpose: Executes a function for each element in an array.
// // Returns: Nothing (undefined); it's used for side effects (e.g., logging, updating UI).

// // foreach only use synchornous side effect or logging , for async api calls , prefer for...of or promise all

// console.log 

// num.forEach(x => {
//     console.log(x)
// });

// str.forEach(x=>
//     console.log(x)  //show the result only 
//     //in console.log , result will show in side the function 
// )

// foreach return the undefined 
// const x = num.forEach(x=>{
//     return x  // it given out thr result 
//     // in return , result will shown out side of function while called it
// })
// console.log(x)

// make condiition in forEach
// num.forEach(x => console.log(x>2))

// // Map
// // Purpose: Transforms each element in an array using a function.
// // Returns: A new array with the transformed elements.

// num.map(x => console.log(x>1))
// const num1 = num.map(x => x + 2 )
// const num11 = num.map(x => x > 2 )  // in map doesnot returned condition
// console.log(num1);
// console.log(num11);   
// comparsion operators are used  for conditions .

// str.map(x => console.log(x))

// // filter 
// // Purpose: Filters elements based on a condition (function returning true or false).
// // Returns: A new array with elements that pass the condition.

// num.filter(x => console.log(x>1))
// const num2 = num.filter(x => x > 2)
// console.log(num2);

// // reduce
// // Purpose: Reduces an array to a single value by accumulating results.
// // Returns: A single value (e.g., sum, product).


// array.reduce((accumulator, currentValue) => {
//   return newAccumulator;
// }, initialValue);

// accumulator: stores the ongoing total.
// currentValue: is  the current number in the loop.
// initialValue: The starting value for the accumulator (e.g. 0, {}, []).

// const numbers = [1, 2, 3, 4];
// const sum = numbers.reduce((a,c)=> a+c ,0)
// console.log(sum);


// // in comparsion operator  >  < 
// // print output in boolean
// // return condition satisfied values returned

// // return vs print

// // 🔁 return
// // Purpose: Sends a value out of a function.
// // Effect: Ends function execution and provides a result to the caller.
// // Used in: Function logic.

// // 📦 console.log()
// // Purpose: Prints output to the console (for debugging/visibility).
// // Effect: Does not affect function output or logic.
// // Used in: Debugging or logging purposes.


// 🤔 So why:
// ❓ "Why console.log prints boolean?"
// Because you're directly logging the result of the condition x > 3 — a boolean.

// ❓ "Why return results values?"
// Because return tells the method (filter, map, etc.) what value to use in building the new array (or whatever it's designed to do).


// note : 
// console.log(): just print result each element line by line 

// result : just store the true result of each element make in an respective inputs (arrays , string , numbers , objects)

// =============================================================
// Array.prototype  : it create a custom method to Array.prototype
//================================================================
// Extend Array prototype
// Array.prototype.first = function () {
//   return this[];
// };

// // Tell TypeScript about your custom method
// declare global {
//   interface Array<T> {
//     first(): T | undefined;
//   }
// }

// export {};

// const arr = [10, 20, 30];
// console.log(arr.first()); // Output: 10


// ======================================================
// array iterations practice 


// const num = [1,2,3,4,5,6,7]
// const str = ["brahmasai", "rp","phani"]

// foreach
// num.forEach((x)=>console.log(x))

//map
// num.map((x)=> console.log(x))

// map returns new array  
// const numMap = num.map((x)=> x)
// console.log(numMap)

// is map returns an  array based on condition 

// num.map((x)=> console.log(x>2))

// const nummapcondition = num.map ((x)=> x>3)
// console.log(nummapcondition)       // map return a new array what value u get, while useing comparsion operator result must be in boolean only 

//filter returns new array based on condition 

// num.filter((x)=> console.log(x))
// const numfilter = num.filter(x=> x)
// console.log(numfilter)

// num.filter(x => console.log(x>3))

// const numCondition =  num.filter(x => x>3)
// console.log(numCondition)  // based on condition that true assigned values only shows 

// reduce
// const sum = num.reduce((a,c)=>a+c,0)
// console.log(sum)


// Array.prototype.sum = function() {
//     return this.reduce((a,c)=> a+c ,0)
// }
// const num = [1,2,3,4,5]
// console.log(num.sum())
//in arrow function ,this is valid , if u want to assign current value to function use this in normal function 

// 🧠 What does this mean here?
// this refers to the array instance that the sum method was called on.
// In num.sum(), this inside the sum function is the array [1, 2, 3].

// Array.prototype.sum = function () {
//     return this.reduce((a,c)=> a+c,0)
// }

// declare global{
//     interface  Array <T> {
//         sum(): T | undefined 
//     }
// }

// export{};

// const num11 = [1,2,3,4,5]
// console.log(num11.sum())



// Array itteration 

const num = [1,2,3,4,5,6,7]
const str = ["brahmasai", "rp","phani"]

// for each   : excute the function on each element on an array
// return is not done

num.forEach((x)=> console.log(x))

const numMap =num.map((x)=>x)
console.log(numMap)

const numCon = num.map((x)=> x>1)
console.log(numCon);

// true or false

const numF = num.filter(x => x)
console.log(numF);
const numc = num.filter(x => x>1)
console.log(numc);

// reduce 

const numr = num.reduce((a,c)=> a + c , + "a") 
console.log(numr);






