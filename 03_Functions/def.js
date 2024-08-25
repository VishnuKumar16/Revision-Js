// A JavaScript function is a block of code designed to perform a particular task.

// A JavaScript function is executed when "something" invokes it (calls it).

// reduce the repetition code.


function square(number) {
    return number * number;
  }

  console.log(square(2));



  function add ( num1, num2 ){
    let result = num1 + num2
    return result
  }

  console.log(add(2,3));


  function sub ( num1 , num2){
    return num1 - num2               // single line return Method
  }

  const result = sub(3,2)
  console.log("result : ", result);
  
  
  //  Return --> with the help of return we can store the value in variable.

  function loginUser (username){
    return `${username} just login`
  }

  console.log(loginUser("Vishnu"));
  