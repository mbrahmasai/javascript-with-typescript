//  arrays are special variables , which can hold more than one value 
let cars : string[] = ["tata","mahindra","bajaj"]
// console.log(cars)

// why use array?
// if u have list of items
// ex: cars = tata , mahindra , bajaj
// in value assign variable  way , each value is assign to each variable

let car1 = "tata"
let car2 = "mahindra"
let car3 = "bajaj"

//--------------------------------------------------------------------------
// create an array can hold many values into single variable
// -------------------------------------------------------------------------
const car = ["tata","mahindra","bajaj"]
//mostly or common practice to declare the arrays with const keyword.

// spaces or line brakes are not important .A declaration can span mutliple lines.

const cars1 = [
    "tata",
    "mahindra",
    "bajaj"
]

// you can also create an array , and then provide the elements with of indexes.
const cara = []
cara[0] = 'tata'
cara [1] = 'mahindra'
cara[2] = "bajaj"

// console.log(cara)

// in javascript keyword , to create an array with new Array keyword. but it have some drawbacks 
const caraa = new Array("tata", "mahindra", "bajaj")
// console.log(caraa);

// differnce btw creating both array methods 
const c = []
const d = new Array()

//these two different statements both  create a new array containing 3 numbers
const e: number[] = [1,2,3]
const f : number[]= new Array(1,2,3)
console.log(e);
console.log(f);

// create with two numbers 

const g : number[] = [4,5]
const h : number[] = new Array(4,5)
console.log(g);
console.log(h);

// create with one number

const single : Array<number> = [6]
const single1 : Array<number> = new Array(6)
console.log(single);
console.log(single1); //[ <6 empty items> ] , so never use new Array keyword if array is to be single value or is go into the single value

// what is type of on array 
const Arr : Array<string | number> = ["brahmasai", 27,]
console.log(typeof Arr);  // object 

// in es5 version , they introduced to method to know is type array are not

// Array.isArray()
console.log(Array.isArray(Arr));

// instanceOf: this operator returns true if an object is created by a given constructor.
console.log(Arr instanceof Array);

//array is type of object

const Arr1 : Array<string | number> = ["brahmasai", 27,]
console.log(typeof Arr1);  // object 

//object is object

interface object1 {
    name : string,
    age : number,
    male : boolean
}

const obj : object1 = {
    name : "brahmasai",
    age : 27,
    male : true
}

console.log(typeof obj);

// difference is mode of access values 

// in arrays accessing value with help indexes only.

const Arr2 : Array<string | number> = ["brahmasai", 27,]
console.log(Arr2);
console.log(Arr2[0]);

// in objects accessing value with properties names .

interface object2 {
    name : string,
    age : number,
    male : boolean
}

const obj1 : object2 = {
    name : "brahmasai",
    age : 27,
    male : true
}

console.log(obj1);
console.log(obj1.name);

// Associative arrays
// in other programming languages arrays can access with the index names , not only indexes numbers . those arrays are associative arrays
// but in java script , arrays can be accessed with the indexes numbers only.
// ====================================================
// nested arrays and object
// ====================================================
const myObj = {
    name : "brahmasai",
    age : 27,
    address :[
        {
            street : 'master colony',
            dist : " SPSR nellore"
        },
        {
            village : "padarupalli"
        }
    ]
}

console.log(myObj.name);
console.log(myObj.address[0].street);
console.log(myObj.address[1].village);
// =============================================================





















