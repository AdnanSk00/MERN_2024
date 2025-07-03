// Getters & Setters :-

class User{

    constructor(name) {
        // invokes the setter
        this.name = name;
    }

    get name(){
        return this._name;
    }

    set name(value){
        if(value.length < 4){
            console.log("Name is too short.");
            return;
        }
        this._name = value;
    }
}

let user = new User("Anderson");
console.log(user.name);   // Anderson

// user = new User("");    // (<4): Name is too short.
user.name = "Adnan";    // (<4): Name is too short.
// console.log(user);
console.log(user.name);