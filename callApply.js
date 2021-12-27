// call, apply and bind
//this keyword
function greet(){
    return `Hello ${this.name}`
}

const personNew = {
    name : 'John Deer'
}
console.log(greet.call(personNew));
console.log(greet.apply(personNew));

const greet2 = greet.bind(personNew);
console.log(greet2())

// Example 2 for call v apply
var person1 = {
    name: "Marvin",
    age: 42,
    size: '2xM'
}
var person2 = {
    name: "John",
    age: 43,
    size: '1xM'
}
var sayHello = function(){
    console.log("Hello " + this.name)
}
var sayGoodBye = function(){
    console.log("GoodBye " + this.name)
}
sayHello.call(person1)
sayGoodBye.call(person2)

sayHello.apply(person1)
sayGoodBye.apply(person2)
//Application of call apply bind
// closure
//multiply(4)(5)(6)=120
// currying
function multiply(x){
    return function(y){
        return function(z){
            return x*y*z
        }
    }
}
multiply(4)(5)(6)
//sumofNum
//{...obj} [...arr]
function sumofNum(...args){
    console.log(...args)
    let total = 0;
    for(let arg of args){
        total = total + arg
    }
    return total;
 }
sumofNum(2,3,6,7)
sumofNum(2,3,6,7)

function getName(name){
    var branch = "CS"
    //lexical scoping
    return function (age){
        console.log(`${name} is ${age} years old today and branch is ${branch}`)
    }
}
console.log(getName('Jacob Milne')(6))
//const getBio = getName('Jacob Milne');
//console.log(getBio(6));