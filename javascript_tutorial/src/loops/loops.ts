// for - loops through a block of code a number of times
// for/in - loops through the properties of an object
// for/of - loops through the values of an iterable object
// while - loops through a block of code while a specified condition is true
// do/while - also loops through a block of code while a specified condition is true

// | Loop Type    | Best Use Case                     |
// | ------------ | --------------------------------- |
// | `for`        | Known number of iterations        |
// | `while`      | Unknown number of iterations      |
// | `do...while` | Run at least once                 |
// | `for...of`   | Looping through arrays or strings |
// | `for...in`   | Looping through object properties |

// for (let i = 0 ; i < 10 ; i++){
//     console.log(i)
// }  //print 0 to 9

// let i = 0;
// while (i < 10){
//     console.log(i)
//     i++
// }

// let i= 1;
// do {
//     console.log(i)
//     i++
// }while(i<5)

// let arr= [1,2,3,4,5]
// let str = "brahmasai"
// const obj = {
//     name : "brahmasai",
//     age : 27
// }

// for (let o in obj){
//     console.log(o)
// }

// for ( let a of arr ){
//     console.log(a)
// }
// for (let s of str){
//     console.log(s)
// }

// for (let ob of obj){
//     // typeerror : object is not iterable
// }


// var i = 5
// for (var i = 0 ; i<10 ; i++){
//     console.log(i)
// }
// console.log(i)

// let a = 5
// for ( let a = 0 ; a < 10 ; a++){
//     console.log(a)
// }
// console.log(a)

// break
// for (let i = 0 ; i < 5 ; i++){
//     if(i ===2) break;
//     console.log(i)
// }

// let i =0 
// while( i < 5){
//     if (i === 2 )break;
//     console.log(i)
//     i++
// }

// let i = 0 
// do{
//     console.log(i)
//     i++
//     if(i === 2) break;
// }while(i < 4)


// try {
// for ( let i = 0 ; i < 5 ; i++){
//     console.log(i)  // in try code is waiting for run
// }
// }catch(error) {
//     console.log(error) // error is catched , 
// }finally{
// console.log(" he is finally")  // even error is occured error has been showed
// }
// throw new error{
// console.log("201 sucessfully" )   // show the error code 
// }



