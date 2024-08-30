const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async task is completed');
        resolve()
        
    },1000)
})

promiseOne.then (function(){
    console.log('Promised consumed');
})



// ------------------------------------------------


new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log('Async task two');
        resolve()
    }, 1000);
}).then(function(){
    console.log("Async 2 resolved");
})




//--------------------------------------------------




const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function(){
        resolve({userName:"Vishnu", enail:"vishnu@gmail.com"})
    },1000)
})
promiseThree.then(function(user){
    console.log(user);
})



//---------------------------------------------------




const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({userName:"Vishnu", password:"123"})
        }else{
            reject("Error: Something went to Wrong")
        }
    },1000)
})

promiseFour
.then((user) => {
    console.log(user);
    return user.userName
})
.then((myuserName) => {
    console.log(myuserName);
})
.catch((error)=>{
    console.log(error);
})
.finally(()=>{
    console.log("Promise is either resolved or rejected");
})



//---------------------------------------------------------



const promiseFive = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error = true                                   //  agr error ratha hai to output mai error show hota hai
        if(!error){
            resolve({userName:"Vishnu Kumar", password:"123"})
        }else{
            reject("Error: Js went to Wrong")
        }
    },1000)
});

async function consumePromise() {
    const response = await promiseFive
    console.log(response);
}

consumePromise()


// this problem solved by try and catch mathod


async function consumePromise() {
    try{
        const resolve = await promiseFive
        console.log(resolve);
    }catch(error){
        console.log(error);
    }
}

consumePromise()




//----------------------------------------------------------------



// async function getAllUser() {
//     try{
//         const response = await fetch (..........link..........)
//     }
// }


