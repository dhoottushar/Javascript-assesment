console.log(hoist)
var hoist;

let ab = 2;
ab = 6;

{
    var xz = 1;
}
console.log(xz)

var x = 4;
{
    //if(x){
    //x= x+1;
    //console.log(x) //5
    //}
    let x;
    console.log(x) //4
}
console.log(x) //4

//


let count = 4;
//let count = 5;
console.log(count)




function foo(n) {
    if (n == 6) {
        var num = 2;
        //  let num = 2;
        // changed to var to avoid error
    }
    console.log(num);

}

var n = 6;
console.log(n);

foo(6);

for (var i = 0; i < 5; i++) {
    console.log(i)
}
console.log(i)
for (let j = 0; j < 5; j++) {
    console.log(j)
}
//console.log(j)

const arr = [1, 2, 3, 4]
arr.push(5, 6)
console.log(arr)

{
    let x = 4;
    {
        let y = 6;
        console.log(x)
    }
}


// ES6
var numbers = [30, 40, 50];
numbers.map(function (value, i) {
    console.log(value, i)
})

// Arrow functions
function sum(a, b) {
    return a + b;
}
sum(2, 3)

let sumArrow2 = (a, b) => a + b;
let sumArrow = (a, b) => {
    let total = 0;
    total = a + b;
    return total;
}

console.log(sumArrow(2, 4))

function sumofNum() {
    let sum = 0
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers
    }
}
let res = numbers.reduce(function (accumulator, current) {
    return accumulator + current
})
console.log(res)



let shoppingCart = [
    { product: 'phone', qty: 1, price: 699 },
    { product: 'Screen Protector', qty: 1, price: 9.98 },
    { product: 'Memory Card', qty: 2, price: 20.99 }
];
let items = {
    product: 'phone',
    qty: 1,
    price: 699,
    firstname: 'Apple',
    getDetails: function(){
        return this.firstname.toUpperCase() + ' ' + 'price is ' + this.price
    }
}
console.log(items.getDetails());
console.log(items.price)
console.log(items['price'])

const person = {}
person.firstName = 'tushar'
person.lastname = 'dhoot'


var a33 = 5;
var bCopy = a33;
console.log(bCopy)
// For objects
const itemsCpy = { ...items };
//[...arr]
console.log(itemsCpy);
itemsCpy.product = 'iphone'
// Spread operator ...
delete itemsCpy['qty']

let user = {};
alert(user.noproperty === undefined);
// key in object
user =  {age: 30, isAdmin: true,};
alert("dd" in user)


for(let ky in user){
    alert(ky)
    console.log(user[ky]);
}
let m ={
    width:200,
    height:300,
    title: "my menu"
}
let clone = {};
for(let k in m){
    clone[k]=m[k]
}
clone.title = "diff"
console.log(Object.assign(clone, {isShow: true},{age:40}));
console.log({...clone, isShow: false, fulldetails: "tushar dhoot"})
//output
m = {
    width:400,
    height:600,
    title: "My menu"
}

// objct.
function multiplyOnlyNumeric(m){
    for(let key in m){
        if(typeof m[key] === 'number'){
            m[key] = m[key]*2
        }
    }

}
multiplyOnlyNumeric(m)
console.log(m)
//compare obj
let a = {};
let b = a;
console.log(a == b)
console.log(a === b)



let d = {};
let e = {};
// two independent object are not equal evcen though they are same
console.log(d == e)
function sorting() {
    let sort1 = false;
    if (element > 5) {
        sort = !sort1;
    }
}



let characters = ['A','B','A','C','B'];
//set
let uniqueChar = [...new Set(characters)];
console.log(uniqueChar)
//forEach, include
let uniqueChar2 = [];
characters.forEach((c) => {
    if(!uniqueChar2.includes(c)){
        uniqueChar2.push(c)
    }
})
console.log(uniqueChar2)
//indexof
characters.forEach((c,index) => {
    console.log(`${c} - ${index} - ${characters.indexOf(c)}`);
})
let finalFilterResult = characters.filter((c,index)=> {
    return characters.indexOf(c) === index;
})
console.log(finalFilterResult)


let objc = [
    {'ag':5},
    {'fn':'tush'},
    {'fn': 'vv'}
]


