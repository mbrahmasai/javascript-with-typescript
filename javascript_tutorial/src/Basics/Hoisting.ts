//  hoisting is js default behavior of moving declarations to the top. then u can able to access the variable before the declaration , 

// console.log(a);  // undefined
// var a = 10 
// console.log(a);

// console.log(y);  //reference error
// let y = 20


// named function is fully hosited 
// ---------------------------------------
// name()    //brahmasai
// function name(){
//     console.log("brahmasai");
// }

// b()  //TypeError: b is not a function
// var b = () =>{
//     console.log("brahmasai");
// }

//===========================================
// scope
///=================================
// 1. global 
// 2. block 
// 3. function
// 4. lexical 


// 1.global
// ------------------------------

// var global1 : string = "brahmasai"
// console.log(global1);
// {
//     console.log(global1)
//     var global2 : string = 'brahmasai2'
// }
// console.log(global2);

// function name(){
//     console.log(global1)
//     var global3 : string = 'brahmasai3'  //function scope
//     console.log(global2);
// }
// name()
// console.log(global3); //ReferenceError: global3 is not defined


// 2. block
//-------------------------------------

// let a = 10 
// console.log(a)

// {
//     let b =  20
//     console.log(a); 
// }
// console.log(b);  //reference error

// function name(){
//     console.log(a); 
// }
// name()

// ------------------------------------------
// 3. function
// -----------------------------------------
// function local1(){
//     var local1v  : any = "sai"
//     console.log(local1v);
// }
// local1()
// console.log(local1v);//reference error
// ------------------------------------------
// lexical scope : inner function have access to variable in their outer function's scope . even after the outer function has finished executing (this enables closures)
//----------------------------------------
function outer(){
    let outervar: string = "brahmasai";
    function inner(){
        console.log(outervar); // 👈 will print "brahmasai"
    }
    return inner;
}

const result = outer();  // outer is called, and inner is returned
result();                // inner is called
// ================================================================