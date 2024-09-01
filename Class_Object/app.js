class emp{
    constructor(n){
       this.name = n ;
    }

    msg(){
        console.log("Hi...");
        
    }
}

class manager extends emp{
    constructor(n,d){
        super(n)
        this.department = d;
    }

    info(){
        super.msg();
        console.log(this.name + "is manager of department" + this .department);
        
    }

}


class admin extends manager{

}


let admin1 = new admin("Vishnu", "web development")
console.log(admin1);


// let mng1 = new manager("Vishnu", "web development");


// console.log(mng1.info());
