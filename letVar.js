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




function foo(n){
    if(n ==6){
        var num = 2;
      //  let num = 2;
      // changed to var to avoid error
    }
    console.log(num);

}

var n = 6;
console.log(n);

foo(6);

for(var i = 0; i <5; i++){
    console.log(i)
}
console.log(i)
for(let j = 0; j < 5; j++){
    console.log(j)
}
//console.log(j)

const arr = [1,2,3,4]
arr.push(5,6)
console.log(arr)

{
    let x = 4;
    {
        let y = 6;
        console.log(x)
    }
}


// ES6
var numbers = [30, 40,50];
numbers.map(function(value, i){
    console.log(value,i)
})

// Arrow functions
function sum (a,b){
    return a+b;
}
sum(2,3)

let sumArrow = (a,b) => a + b;
let sumArrow = (a,b) => {
    let total = 0;
    total = a + b;
    return total;
}

console.log(sumArrow(2,4))







