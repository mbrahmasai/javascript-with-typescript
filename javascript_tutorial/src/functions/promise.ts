// promise is object and it is constructor

// let p : Promise<string> = new Promise() 

// promise object takes a callback function

// let p = new promise (function(){})

// This object  returns some data either success data or error information

// let p = new promise (function(resolve, reject){

// })

// resolve(value) → called when the task is successful.
// reject(error) → called when the task fails.

// states of promise 
// pending 
// fulfilled 
// rejected  

 
// let p = new Promise(
//     function(success ,error){
//         // this excutor function 
//         let data = true
//         if( data ){
//             success([1,2,3,4]);
//         }else{
//             error("reject");
//         }
//     }
// )
// console.log(p) 

// if u want function is call ano  ther function had excuted 
// use then method
// then method has call function when promise is success


// p.then(function(data){
//     console.log(data)
// })

// catch : promise  it get failed then call catch 

// .catch(function(error){
//     console.log(error)
// })


// .then( )  // handle success 
// .catch( ) // Handle errors
// .finally()  // runs always
// promise.all // wait for all
// promise.race // wait for the first to finsh 
// async/await  // clean syntax for writing async code


// promise.all  : When you want to run multiple tasks in parallel and proceed only when all of them are successful.
// Promise.race : 
// When you're only interested in the first result (fastest response), like:
// Multiple API endpoints, pick the fastest
// Set a timeout fallback for slow tasks



// | Feature        | `Promise.all()`              | `Promise.race()`                        |
// | -------------- | ---------------------------- | --------------------------------------- |
// | Waits for all? | ✅ Yes                        | ❌ No                                    |
// | Resolves with  | Array of all resolved values | First settled value (resolve or reject) |
// | Rejects on     | Any one rejects              | First one to reject                     |
// | Best for       | Waiting for all tasks        | Fastest result or timeout scenarios     |


let  p1 = new Promise ((resolve, reject)=>{
    let data = true;
    setTimeout(() => {
            if (data){
        resolve("this is completed 1")
    }else{
        reject("this is failed")
    }
    }, 3000);
})



// p1.then((message)=> .console.log(message)).catch((error)=> console.log(error))

let  p2 = new Promise ((s,f)=>{
    let state = true;
    setTimeout(() => {
            if(state){
        s("this is completed 2 ")
    }else {
        f("this is failed2")
    }
    },5000)
})

// p2.then((m)=> console.log(m)).catch((f)=>console.log(f))

let p3 = new Promise ((m,s)=> {
    let st =true 
    setTimeout(()=>{
            if(st){
        m("this is completed 3")
    }else{
        s("this is failed 3")
    }
    },5000)
})
// p3.then((m)=>console.log(m)).catch((c)=>console.log(c))

//it is synchrous way 
// used as async way 

// p1.then((message) => console.log(message)).catch((error) => console.log(error));
// p2.then((m) => console.log(m)).catch((f) => console.log(f));
// p3.then((m) => console.log(m)).catch((c) => console.log(c));
// this is synchorous way 

// asynchorous way 



p1.then((res1)=>{
    console.log(res1);        // after 3 seconds
    return p2;
}).then((res2)=>{
    console.log(res2);        // after 2 more seconds (5s total)
    return p3;
}).then((res3)=> {
    console.log(res3);        // after 2 more seconds (7s total)
}).catch((err)=>{
    console.error("Error :", err);
});



//is first  statement is failed then it goes last and show result




// us promise all method used 
// Promise.all([p1,p2,p3]).then((result)=> console.log(result)).catch((failed)=>console.log(failed))  
// if one statement is failed , then failed one is shown
// set timeout is used , promise.all is accepts the first promise settimeout only