function calcSum (arr){
    var total = 0;
    for(var i = 0; i < arr.length; i++){
        if(typeof arr[i] == 'number'){
            total = total + arr[i];
        }
        
    }
    return total;
}
console.log(calcSum([1,4,3,6,8,'A','H']))
//calcSum([1,9,3,6,5,9])

var array = [1,2,3];
array.push(4)
array.push(5)
array.push(6)
console.log(array)
// Insert 4,5,6 in end
// insert 0,-1,-2 in beigining
// shift and unshift
// Delete last element from array
// pop and push
// Delete first element
// Reverse the array
const fruits = ['Banana', 'Apple', 'Orange']
// ['Orange', 'Apple', 'Banana']
// 
for(var i = fruits.length - 1; i >= 0; i--){
    console.log(fruits[i])
}
//Converting arrays to string
//console.log(fruits.toString())
// Join
//console.log(fruits.join(' _ '))
// Merge two array
const arr12 = ['email',"name"]
const arr2 = ['abc', 'xyz']
const arr3 = ['df', 'sf']
console.log(arr12.concat(arr2, arr3))
//splice
console.log(fruits.splice(0,1))
// Date
//2020v 10m 12d
const d = new Date(2020,10,12);
console.log(d)
document.getElementById('dateObj').innerHTML = d


const date2 = new Date();
console.log(date2.getDate())
console.log(date2.getDate())
console.log(date2.getDate())
console.log(date2.getDate() + '/' + date2.getMonth() + '/' + date2.getUTCFullYear())

setTimeout(function(){
    console.log('tushar')
},2000)

function sayHi(){
    alert('hello')
}
setTimeout(sayHi,3000)
var interval = setInterval(function(){
    console.log('tushar')
},2000)
clearInterval(interval)

for(var i = 0; i < 5; i++){
    setTimeout(function(){console.log(i)},1000)
}

// hoisting
console.log(hoist)
var hoist;

let ab = 2;
ab = 6;

 {
     var xz = 1;
 }
 console.log(xz)


{
    x = x + 1
    let x;
    console.log(x)
}
