// class="abc"
// .abc {

// }
// id="xyz"
// #xyz {
// }
// document.getElementsByClassName('abc')
// document.getElementById('xyz')
var click = false;
function myFunction() {
    if(click === false){
        click = true;
        document.getElementById('demo').style.display = "none";
    } else {
        document.getElementById('demo').style.display = "block";
        document.getElementById('demo').innerHTML = "Button is clicked";
        click = false;   
    }
}
// undefined
// number
var x = 2;
//string
var firstName = 'tushar'
//boolean
var isValid = true;
// Array
var arr = [1,2,3,4,5]
//Object
var obj = {
    firstName: 'tushar',
    lastName: 'dhoot'
}
//typeof operator
typeof 2;
    typeof 2==2 // false
    typeof (2==2); // boolean
var arr1 = [1,2]
typeof arr1;


var num = [1,2,3,4,5,6,7,8,9,10]
for(var i = 0; i < num.length; i++){
    console.log(num[i])
} 
//Array empty
num.length = 0
num = []


const clothes = ['jacket', 'tshirt']
clothes.length = 0;
clothes[0];



function foo(){
    let a = b = 0;
    //let a;
    //b = 0;
    a++;
    return a;
}
//console.log(b)
foo();
typeof a; // undefined
typeof b; // number


//eagle eye test
let length = 4;
let num1 = [];
for(var i=0; i<length; i++){
    console.log(i)
}



0.1+0.2 === 0.3 /true/ false
1 + '2'
1+2+'4'+'5'+6
1 + '2'
//'12'
1+2+'4'+'5'+6
//'3456'
1 + -'1' + '2'
//'02'
1 + +'1' + '2'




















