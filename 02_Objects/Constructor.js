//              2-> Constructor

// Constructor   -> Constructor have make Singleton 

// Sometimes we need to create many objects of the same type.

// To create an object type we use an object constructor function.

// It is considered good practice to name constructor functions with an upper-case first letter.


//  Const FB_User = new Object() --->  Singleton
//  Const FB_User = {}           --->  Non Singleton

const tinderUser = {}
tinderUser.id = "Vishnu123"
tinderUser.name = "Vishnu"
tinderUser.isLoggedIn = "false"

// console.log(tinderUser);


// Object inside Object

const regularUser = {
    email:"Vishnu@gmail.com",
    fullname:{
        userFullname:{
            firstname:"Vishnu",
            lastname: "Kumar"
        }
    }
}

// console.log(regularUser);
// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userFullname.firstname);

