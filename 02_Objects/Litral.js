// Object can declear by {};

// Object can declear by 2 types.

// 1-> Litral        -> Litral have not make Singleton
// => An object literal is also callled an object initializer.
// => An object literal is a list of property names:values inside curly braces {}.

// Examples
// {firstName:"Visshnu", lastName:"Kimar", age:23,};

//Code ----

const jsUser = {};

jsUser.firstName = "Vishnu";
jsUser.lastName ="Kumar";
jsUser.age = 23;
jsUser.course = "Java Script";

console.log(jsUser.firstName);
console.log(jsUser.lastName);
console.log(jsUser.age);
console.log(jsUser.course);





// 2-> Constructor   -> Constructor have make Singleton 