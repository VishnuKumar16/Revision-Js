//The reduce() method of Array instances executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.

//currentValue  ->> jo v current value chal rhi hai
//accumulator   -->  result wale value ko aapne mai store kr leta hai or fr new wale value ko add kr ke fr return kr deti hai
//initialValue  -->  new value

// const array1 = [1, 2, 3, 4];

// // 0 + 1 + 2 + 3 + 4
// const initialValue = 0;
// const sumWithInitial = array1.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue,
// );

// console.log(sumWithInitial);
// // Expected output: 10

//-----------------------------------------------

// const myNums = [1, 2, 3, 4, 5]

// const myTotal = myNums.reduce(function (acc, curval) {
//     console.log(`acc: ${acc} and curval: ${curval}`);
    
//     return acc + curval
// }, 0 )


// Same code in single line ----

// const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)


// console.log(myTotal);




//-------------------------------------------------------------


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "python course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 12999
    },
    {
        itemName: "java course",
        price: 1999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);
