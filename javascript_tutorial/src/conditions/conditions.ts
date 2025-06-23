// if: condition is true , return statement else , return nothing

// let age : number = parseInt(prompt("enter the age : " ) || "0") //preventing parseInt(null), use   0 is default 

// if ( age >= 18 ){
//     console.log("he is major");  
// }

// if else
// if (age >=18){
//     console.log('he is major');
// }else{
//     console.log("he is minor");
// }


// if elseif else

// if ( age >= 100){
//     console.log("he is died");
// }else if (age> 60){
//     console.log("he is senior citizen");
// }else if (age >= 18){
//     console.log("he is major");
// }else if (age <= 0){
//     console.log("he is not born ");
// }else{
//     console.log("he is minor");
// }

// switch

// switch(true){
//     case ( age >= 100):
//         console.log("he is died ");
//         break;
//     case ( age >60 ):
//         console.log("he is senior citizen ");
//         break;
//     case ( age >= 18):
//         console.log("he is major");
//         break;
//     case( age < 0 ):
//     console.log("he is not born");
//     break;
    
//     default: 
//     console.log(" he is minor");
// }

// let day = parseInt(prompt("enter is day")||"0")

// switch(day){
//     case 1: 
//     console.log("this is monday");
//     break;
//     case 2 : 
//     console.log("this is tuesday");
//     break;
//     case 3 :
//         console.log("this is wednesday");
//         break;
//     case 4 :
//         console.log(" this is thrusday")
//         break;
//     case 5 :
//         console.log("this is friday");
//         break;
//     case 6 : 
//     console.log("this is saturday")
//     break;
//     case 0 :
//         console.log( "this is sunday")
//         break;
//     default:
//         console.log("day is not valid") 
// }


//ternary operator 

// let status = (age >=18) ? "adult": "minor"
// console.log(status);

// let age = parseInt(prompt("enter the age : ") || "0")

// if 
// if ( age >= 18){
//     console.log("he is major")
// }


// if else:

// if ( age >= 18 ){
//     console.log("he is major")
// }else{ console.log(" he is minor")}

// if elseif else

// if ( age >= 100 ){
//     console.log( " he is died")
// }else if (age >= 60){
//     console.log( "he is senior ")
// }else if ( age >= 18){
//     console.log(" he is major")
// }else if (age <= 0){
//     console.log( "he is not born")
// }else{
//     console.log("he is minor")
// }

// switch 

// switch ( true ){
//     case ( age >= 100):
//         console.log("he is died")
//         break;
//     case ( age >= 60):
//         console.log("he is senior ")
//         break;
//     case ( age >= 18):
//         console.log( "he is major")
//         break;
//     case ( age <= 0):
//         console.log("he is not born")
//         break;
//     default:
//     console.log("he is minor")
// }


let day = parseInt(prompt("enter the day : ") || "0")



// switch (age) : case value : state : break

switch (day){
    case 1 :
        console.log("monday")
        break;
    case 2:
        console.log("tuesday")
        break;
    case 3 :
        console.log("wednesday")
        break;
    case 4:
        console.log(" thrusday")
        break;
    case 5:
        console.log( " friday")
        break; 
    case 6 :
        console.log("saturday")
        break;
    case 7 :
        console.log("sunday")
        break;
    default:
    console.log("day is not valid")
}


// ternary operator\
let age = 10

let status = ( age >= 18) ? "he is major" : "he is minor"
console.log(status)