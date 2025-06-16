// variables  are nothing but a containers which is used to store a data in different data type values

//in js variables are denoted with 3 type of keywords. They are var, let , const


// var data : string = "string Data"
// console.log(data)

// let data1 : string = "string Data1"
// console.log(data1)

// const data2 : string = "string Data2"
// console.log(data2)

//---------------------------------------------------------------------------
// var is allowed u redeclare the variable and reasign the value
//-------------------------------------------------------------------
// var data   // declaring the variable
// data = "brahmasai"  // assign the value to variable
// data = "sai"        // reassign the value to variable 

// var data : any  = "Brahmasai"  //redeclaring the variable 

// var data : string = "brahmasai" // in typescript , redeclaring the variable is only allowed in any 

// var data : unknown = "brahmasai"  // unknown also not supported to redclaring a variable\

//---------------------------------------------------------
//  let is introduced in ec6 version of js.
//  it is block scope.
//  it must be declare before use means hoisting is not supported. 
//  it canot be redeclare the same variable .
//  it allows u to reassign the value. 
//---------------------------------------------------------------
// let data : string = "brahmasai"

// data = "sai"  // reassign is allowed

// let data  : any = "brahmasai"  // redeclaration is not allowed within the scope 
//-----------------------------------------------------------
//block scope 
//----------------------------------------------------------
//redeclaration in different block scopes

// let data = "brahmasai1"
// {
//     let data = "brahmasai2"
//     console.log(data)
// }
// {
//     let data = "brahmasai3"
//     console.log(data)
// }
// console.log(data)
// ---------------------------------------------------------
// access the value in different block scopes


// let data1 = "brahmasai1"
// {
//     let data2 ="brahmasai2"
//     console.log(data1)   // this is works 
//     //Inner blocks in JavaScript have access to variables from outer scopes.
// }
// console.log(data2)  // ReferenceError: data2 is not defined

//-----------------------------------------
//hosting 
//------------------------------------------
// console.log(data1)    // ReferenceError: Cannot access 'data1' before initialization
// let  data1 : string  ="brahmasai"  

//===============================================================================
// const  in js must be assigned a value when they are declared,
// it canot be redeclared 
// it cannot be reassigned
// it is block Scope
//-----------------------------------------

// const data : string = "brahmasai"
// console.log(data)

// const data : string = "brahmasai"
// {
//     const data1 : string = "brahmasai1"
//     console.log(data)
// }

//-----------------------------------------------
// const in object and Array 
// ---------------------------------------------------------
// const doesnot define the constant  value . it defines a constant reference to a value 

// you can't 
// 1. reasign a constant value 
// 2. reasign a constant Array 
// 3. reasign a constant object

// you can 
// 1. change the Elements of constant Array 
// 2. change tehe properties of constant object
// ---------------------------------------------------------

// 1. reasign a constant value 

// const data : string = 'brahmasai'
// data= "brahmasai"

//// 2. reasign a constant Array 

// const dataarr : Array<string>= ["brahmasai","ram prasad", "phani"]
// dataarr = ['rajkumar', "sunil" , "kami"]

// 3. reasign a constant object

// const dataObj = {
//     name : "brahmasai",
//     age : 27
// }

// dataObj = {
//     name : "ram",
//     age : 29
// }

// --------------------------------------------------------
// 1. change the Elements of constant Array 

// const car : Array<string> =["audi","BMW","tata"]
// console.log(car)

//change the element in array 
// car[0] = "mahindra"
// console.log(car)
// car.push("range rover")
// console.log(car)
// car.pop()
// console.log(car);

// 2. change tehe properties of constant object

// const user : any = {
//     name : "brahmasai",
//     age : 27
// }
// console.log(user)

// user.age = 26
// console.log(user);

// user.gender = "male"
// console.log(user)   // if u add element in object ,must declare type any

// ---------------------------------------------------------------------------




