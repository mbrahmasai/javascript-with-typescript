
// named function 

// function name( namee:string ){
//     return "hello," + namee
// }

// console.log(name("brahmasai"))

// const name1 = name("sai brahma")  // if u want to use dirctly some where use variable to store the function
// console.log(name1)


// hosting 

// console.log(named("rp"))
// // console.log(named1) //reference error
// const named2 = named ("mohana")
// console.log(named2)

// function named ( name : string){
//     return "hosting is working ," + name
// }

// console.log(named("brahmasai"))

// const named1 = named("phani")
// console.log(named1)
// console.log(named1("7"))   //type error

// use variable in function 

// const a = 10 
// function named ( name : string){
//     return a + name
// }
// console.log(named( " brahmasai"))

// use local varible in the function
// function name1 ( name:string ){
//     let n = 10 
//     return n + name
// }
// console.log(name1("brahmasai"))


// function expression (Ananymous function)
// console.log(named("brahmasai"))  // reference error 

// const named = function(name:string){
//     return "hello, " + name
// }
// console.log(named("brahmasai"))
// const nm= named ("brahmasai")
// console.log(nm)

// console.log(named("brahmasai")) // type Error named is not a function
// var named = function(name : string){
//     return "hello , " + name
// }
// console.log(named("brahmasai"))
// const nameed = named("rp")
// console.log(nameed)


// arrow function 

// const arr = (a: number,b: number) =>{
//     return a + b
// }
// console.log(arr(2,4))

// immediately invoked function expression (iife)
//===================================================
// | Purpose           | Benefit                                 |
// | ----------------- | --------------------------------------- |
// | Encapsulation     | Avoid polluting global scope            |
// | Module pattern    | Create private variables/methods        |
// | Initialization    | Run setup logic once                    |
// | Legacy closures   | Capture variable state in loops         |
// | Polyfills/configs | Patch or configure without side effects |

// (function(){
//     console.log("brahmasai")
// })();   // if u want to use to iife line by line  use ; to end the function

// (function(name:string){
//     //iife is doen.t return anything because it can be called immediately
//     console.log(`hello , ${name}` )  // templete literal 
// })("brahmasai")

// let  name :string = "brahmasai";
// (function(n :string){
//     console.log(`hello , ${n}`);
// })(name)


// (()=>{
//     console.log("brahmasai")
// })();
// ((n:string)=>{
//     console.log(n)
// })("brahmasai1");

// let na :string= "brahmasai2" ;
// ((n:string)=>{
//     console.log(n)
// })(na)


//function generator
//=========================




// closure
// ----------------------

// let name = "brahmasai"  // it is global scope 
// function named(n: string){
//     return name
// }
// console.log(named(""))


// A closure is a function inside another function.
// The inner function can access variables from the outer function even after the outer function has finished running.

// function name ( n : string){
//     let outervar = "brahmasai"
//      function innerName( m : string){
//         console.log(outervar , "first")
//     }
//     function inner2 ( o:string){
//         console.log(outervar , "second")
//     }
//     return [innerName("") ,inner2("")]
// }
// console.log(name(""));



// optional parameter

// function name ( a: string ,b:string, c?:string | null){
//     return a + b + (c ?? "")
// }
// console.log(name("brahma","sai" ))

// function name ( a: string ,b:string, c?:string | null){
//     return a + b + (c ?? "manubolu")
// }
// console.log(name("brahma","sai" ))


// function name ( a: string ,b:string, c?:string | null){
//     return a + b + (c ?? "")
// }
// console.log(name("brahma","sai", "rp" ))

// default parameter
// function name ( a: string ,b:string, c:string= "data"){
//     return a + b + c
// }
// console.log(name("brahma","sai", ))

// function name ( a: string ,b:string, c:string= "data"){
//     return a + b + c
// }
// console.log(name("brahma","sai", "manubolu" ))


// currying  : Currying is the process of transforming a function that takes multiple arguments into a sequence of functions that each take a single argument.
// function named ( a:string,b:string ,c:string){
//     return a + b  + c
// }

// console.log(named("brahma","sai","manubolu"))

//why currying

// function named ( a:string){
//     return function(b:string){
//         return function(c :string){
//             return a + b + c
//         }
//     }
// }

// console.log(named("brahma")("rp")("phani"))

// callback  : callback function is a function passed as an argument to another function, to be executed later, usually after some kind of event or task has completed. This is commonly used for asynchronous operations like network requests, timers, or event handling.

// hof ( higher order function ) :  function that takes another function as an argument 
//=======================================
// function hof( a:string, b:string , callback1:any){
//     console.log("this is higher order function")
//     return  callback1()
// }

// function callbackf( ){
//     console.log( " this is callback function")
//     return "called"
// }

// const f1= hof("brahma","sai",callbackf)
// console.log(f1);  // call the return

// callstack  synchornous code in call stack
///=============================================
// function task3(){
//     console.log("this is task 3")
//     return "task 3 is completed"
// }
// function task2(){
//     console.log("this is task 2")
//     console.log(task3())
//     return "task 2 is completed"
// }
// function task1(){
//     console.log("this is task 1")
//     console.log(task2())
//     return "task 1 is completed"
// }
// console.log(task1())
//=======================================
//lexical scope
// excution context 
//=================================
// this : tell the current object

// 🔧 call
// Immediately calls the function.
// You pass the this value and then the arguments one by one.
//=========================================================
// let obj ={
//     firstName : "brahmasai",
//     lastName : "Manubolu",
//     fullName : function(){
//         return this.firstName + this.lastName
//     }
// }
// console.log(obj.fullName())

// let obj1 = {
//     firstName : "anil",
//     lastName : "kumar"
// }

// console.log(obj.fullName.call(obj1))


// call method with aurguments 
//=====================================
// interface PersonName {
//     first: string;
//     last: string;
// }

// interface Perr {
//     fullname: (this: PersonName, city: string, country: string) => string;
// }

// const person: Perr = {
//     fullname: function ( city: string, country: string) {
//         return this.first + " " + this.last + " " + city + " " + country;
//     }
// };

// const per: PersonName = {
//     first: "brahmasai",
//     last: "manubolu"
// };

// console.log(person.fullname.call(per, "bengaluru", "india"));

// 🔧 apply
// Just like call, but you pass the arguments as an array.
// ==============================================================

// const obj ={
//     first : "brahmasai",
//     last : "manubolu",
//     fullname : function(){
//         return this.first + " " + this.last
//     }
// }
// console.log(obj.fullname.apply(obj))

// interface Per {
//     first: string;
//     last: string;
// }

// interface Pers {
//     full: (this: Per, a: string, b: string) => string;
// }

// const obj: Pers = {
//     full: function (this: Per, a: string, b: string) {
//         return this.first + " " + this.last + " " + a + " " + b;
//     }
// };

// const person: Per = {
//     first: "brahmasai",
//     last: "manubolu"
// };

// console.log(obj.full.apply(person, ["bengaluru", "india"]));

// 🔧 bind
// Does not call the function immediately.
// It returns a new function with this set.

// interface Per {
//     first: string;
//     last: string;
// }

// interface Pers {
//     full: (this: Per, a: string, b: string) => string;
// }

// const obj: Pers = {
//     full: function (this: Per, a: string, b: string) {
//         return this.first + " " + this.last + " " + a + " " + b;
//     }
// };

// const person: Per = {
//     first: "brahmasai",
//     last: "manubolu"
// };

// // Create a bound function
// const boundFull = obj.full.bind(person);

// // Now call it with arguments
// console.log(boundFull("bengaluru", "india"));

// function recuresion

// callback Hell
// 😵 What is Callback Hell?
// Callback Hell (also called “Pyramid of Doom”) happens when you nest too many callbacks, especially in asynchronous code — making it:

// Hard to read
// Hard to debug
// Hard to maintain


// asynchrorous 

// promises method
// async / await

// set timeout 
// clear timeout 
// set interval 
// clear interval
