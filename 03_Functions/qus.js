//               How to use Object in Function?

const user = {
    userName : "Vishnu",
    Price : 199
}

function handleObject (anyObject){
    console.log(`userName is ${anyObject.userName} and Price is ${anyObject.Price}`);
    
}

// handleObject(user)

handleObject({
    userName:"Happy",
    Price:"Free"
})