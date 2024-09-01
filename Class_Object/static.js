class person {
    constructor(n,a) {
        this.name = n;
        this.age = a;
    }

    sayHi(){                       // khood se prototype mai ja kr attach ho jata hai
        console.log("hi..");  
    }

    static sproperty = "something";

    static hello(){
        console.log("Hello..");
        
    }
}


let person1 = new person("Vishnu", 23);

person1.sayHi();
// person1.hello();

person.hello();       // static method direct class se call hota hai
console.log(person.sproperty);


console.log(person1);

