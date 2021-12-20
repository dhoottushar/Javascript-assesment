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
