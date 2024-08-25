 // Map is callback function
 // Map automatic value Returns --> undefine return krte hai

 // all basic like filter

 const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//  const newNums = myNums.map((num)=> num + 10)

const newNums = myNums
            .map((num) => num * 10)
            .map((num) => num + 1)
            .filter((num) => num>=40)
 console.log(newNums);
 
