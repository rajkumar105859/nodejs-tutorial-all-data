// var a = 10 ;
// var a = 20 ;
// console.log(a);

// let b = 20 ;
// function abc(){
//     //let b = 30 ;
//     console.log(b);
// }
// abc();
// console.log(b);

// const a = 20;
// a = 40 ;
// console.log(a);

var name = "Rajkumar";
var age = 21 ;
console.log("Hello %s you are %s year old", name ,age);
console.log(`Hello ${name} you are ${age} year old`);

class Users{
    constructor(){
        this.name = "Rajkumar";
        this.age = 21 ;
    }
    getName(){
        return this.name;
    }
    
    getAge(){
        return this.age;
    }
}

var user = new Users();
console.log(user.getName());
console.log(`Your age is ${user.getAge()}`);



