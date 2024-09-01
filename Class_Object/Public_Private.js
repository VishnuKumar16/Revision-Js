class emp {
    #name=" ";
    constructor(n){
        this.#name = n;
    }

    #getName(){
        console.log(this.#name);
    }

    pubFun(){
        this.#getName();
    }
}

let Emp1 = new emp("Vishnu")
console.log(Emp1.pubFun());
