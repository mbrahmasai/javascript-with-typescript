// Array methods 

// const arr : number[] = [1,2,3,4,5,6,7]
// const arrOriginal : any = ["brahmasai", "ram prasad", "phani"] //reference 1


// console.log(arrString);
// console.log(arrString1);




// Array.length : it returns the length(size) of an array
// console.log(arr.length);
// console.log(arrString.length); // index + 1


// array into string
//==========================================
// Array.toString() : it returns just array into string 
// console.log(arr.toString())
// console.log(arrString.toString())

//array.join() : it returns array into string and also add seperator between the element in array
// console.log(arr.join("<"));
// console.log(arr.join(2));   // seperator must be in the string only

// Array.at(index_number)  and Array[index_number] : returns an indexed element from an array.
// console.log(arrString.at(1));  //array.at() is doenot exit in ts , it works on js  , because array.at() methods introduced in es2022 , ts version is 2020. check that in tsconfig.json file.
// console.log(arr[1]);


//here shallow copy happen... goto shallow copy 
// use array.slice() or [...array] spread operator


// 📋 1. What is a Shallow Copy?
// A shallow copy duplicates only the first level of a structure.
// If the original has nested objects or arrays, the references are copied, not the values.

// 🧬 2. What is a Deep Copy?
// A deep copy duplicates everything, including nested objects and arrays.
// So changes in the copy do not affect the original.

// | Copy Type        | Method                            | Notes                       |
// | ---------------- | --------------------------------- | --------------------------- |
// | **Shallow Copy** | `Object.assign({}, obj)`          | Copies top level only       |
// |                  | `{ ...obj }`                      | ES6 spread syntax           |
// |                  | `array.slice()` or `[...array]`   | For arrays                  |
// | **Deep Copy**    | `JSON.parse(JSON.stringify(obj))` | Simple, but limited types   |
// |                  | `structuredClone(obj)`            | Modern, supports most types |
// |                  | `_.cloneDeep(obj)` from Lodash    | Full-featured               |


// add or remove the last element 
// pop : it removes the last element in array

// const arrString1 = arrString.pop()  // here last element will be deleted in original also to avoid this using learn the shallow copy and deep copy 

// console.log(arrString);  //after the deleting the last element , remaining elements will be shown .
// console.log(arrString1); //here deleted element only shownz

// const arrpop = [...arrString]
// const arrpop1 = arrpop.pop()
// console.log(arrString);
// console.log(arrpop);
// console.log(arrpop1);

// push : it add element after the last index of an array

// const arrpush = [...arrString]
// const arrpush1 = arrpush.push("mohana")  // here adding an element in arrpush not arrpush1
// console.log(arrpush); 
// console.log(arrpush1); // it shows the length of array

// ❌ arrpush1 will hold the new length of the array, because .push() returns the length, not the array itself.

// add and remove elements in first index of an array
// ===================================================
//shift : it remove the first index element in array

// const arrshift = [...arrString]
// const arrshift1 = arrshift.shift()
// console.log(arrshift);
// console.log(arrshift1);


//unshift :  it add the element in first index of an array

// const arrunshift = [...arrString]
// const arrunshift1 = arrunshift.unshift("mohana")
// console.log(arrunshift);
// console.log(arrunshift1);

//delete : using delete( ) leaves undefined holes in the array  

// const arrDup = [...arrOriginal]  // reference 2   remaining elements is stored in var 2
// const arrdelete = delete arrDup[0]  // refence 3 deleted elem ent add 
// console.log(arrdelete);
// console.log(arrDup);


//concat  

// const arr1 = [1,2,3]
// const arr2 = [4,5,6]
// const arr3 = [7,8,9]

// const  twoVar = arr1.concat(arr2) // concat btw 2 varibles
// const multipleVar = arr1.concat(arr2,arr3)  // concat btw multiple varible

// console.log(twoVar);
// console.log(multipleVar);

//flat : creates a new array with sub-array  elements concatenated to a sepcified depth 

// const subArray = [1,[2,3],[4,5]]
// const newFlat = subArray.flat()
// console.log(subArray);
// console.log(newFlat);

// const arrr = [...arr1, [...arr2] ,...arr3]
// const arrrFlat = arrr.flat()
// console.log(arrr);
// console.log(arrrFlat);


// splice  and slice 
// splice : method adds new items to an array.  manipulation is happen 

// const names = ['brahmasai', "ram prasad", "phani"]

// const dupNameremove  = [...names]
// // delete element 
// const deleted = dupNameremove.splice(0,1) // delete the elements from 0 index and delete 1 element only  it means , remove the 1 elements

// console.log(dupNameremove);
// console.log(deleted);


// const removeallelement = [...names]
// const empty = removeallelement.splice(0,3)
// console.log(removeallelement);
// console.log(empty);

// insert elements
// const names = ['brahmasai', "ram prasad", "phani"]
// // const addoneelement = names.splice(1,1,"mohana","kusuma")
// // console.log(names);
// // console.log(addoneelement); // in splice even u add element in array , variable stores deleted element only

// const addtwo = names.splice(2,2,"raj", "sunil")  // even u give delete 2 elements, but from the 2 index it has one element , delete that one element and add those elements.
// console.log(names);
// console.log(addtwo);

// replace elements

// const arrreplace = [1,2,3,4,5]
// const replace = arrreplace.splice(2,3,33,44,55,66)
// console.log(arrreplace);
// console.log(replace);

// slice : manipulation is not happen
// The slice() method creates a new array.
// The slice() method does not remove any elements from the source array.

// const arrslice = [1,2,3,4,5]
// const arrslicedd = arrslice.slice(2)  // before 2nd index elements is deleted
// console.log(arrslice);
// console.log(arrslicedd);

// const arrIndex = arrslice.slice(1,2)  // The method then selects elements from the start argument, and up to (but not including) the end argument.
// console.log(arrIndex);


// concat 

const arr1 = [1,2,3]
const arr2 = [4,5,6]
const arr3 = [7,8,9]

// concat with 2 arrs 
// const addtwo = arr1.concat(arr2)
// console.log(addtwo);


//concat with multiple
// const mutli = arr1.concat(arr2,arr3)
// console.log(mutli);


// flat 

// const arr4 = [1,2,[3,4],5,6,[7,8]]
// console.log(arr4.flat());

// const arrsp = [...arr1,[arr2],[...arr3]]  // use flat must spread all arrays in one array

// ...arr1 — spreads all elements of arr1

// [arr2] — creates a nested array with arr2 as one element

// [...]arr3 — spreads arr3 (okay)

// const arrspr = [...arr1,[...arr2],[...arr3]]
// console.log(arrsp.flat());
// console.log(arrspr.flat());



// splice   : splice manipulate the original array
//delete 

// const arre = ["rp", "mbs","phani","mohana"]
// arre.splice(2)
// arre.splice(2,1)

// insert 
// arre.splice(arre.length,0,"vasu")   //to add element in last use arre.length
// console.log(arre);
// arre.splice(0,0,"nag")
// console.log(arre);

//replace 

// arre.splice(1,2,"nag","durga")
// console.log(arre);

// slice : slice out the element 

// const arre = ["rp", "mbs","phani","mohana"]
// const duparr =[...arre]
// const splice1 = duparr.splice(1,3)

// const slice1 = arre.slice(1,3)  // from index to -1 index
// console.log(duparr);

// console.log(splice1);

// console.log(slice1);
// slice : method slices out a piece of an array.


//=========================================================
// searching
//=========================================================
// const sear = [1,2,3,44,5,6,77,2,14,543,74,2,78,9,0]



// Array indexOf()	Returns the first position of an element value
// console.log(sear.indexOf(2)); // first index of value

// Array lastIndexOf()	Returns the last position of an element value
// console.log(sear.lastIndexOf(2));

// Array includes()	Returns true if an element value is present in an array
// console.log(sear.includes(543));
// console.log(sear.includes(7));


// Array find()	Returns the value of the first element that passes a test


// Array findIndex()	Returns the index of the first element that passes a test
// Array findLast()	Returns the value of the last element that passes a test
// Array findLastIndex()	Returns the index of the last element that passes a test

// =========================================
// sorting arrays
// ========================

// const sor = [1,2,3,12,11,4,2,5,6,7]

// aplhabet sort 
// sort
//assecending
// console.log(sor.sort());  // 11 is also as less than 2 // this is alphabetical

// console.log(sor.sort((a,b)=>a-b));  //numerically sorting 

//desencding 
// console.log(sor.reverse());  // this is not for numbers only for string 
// console.log(sor.sort((a,b)=>b-a));

// console.log(sor.sort(()=>0.5- Math.random()));

// second highest or lowest  
// nth highest or lowest

//remove duplicates and sort 
// const uniqu1 = [...new Set(sor)].sort((a,b)=>a-b)

//  const secondLowest = uniqu1[1]
// const secondLargest = uniqu1[uniqu1.length - 2]
// console.log(secondLowest);
// console.log(secondLargest);
















// manipulation :  step 1 . original array copy to duplicate array with help spread operator or Array.slice method
// step 2 : do  manipulation in duplicate array while that duplicate array is assign third variable .

// what happen : while manipulation ;; second array data changed based condition . third one what the element is removed
