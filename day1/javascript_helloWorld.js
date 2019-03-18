//javascript functional programming
/*
  Functional programming: functions are first class citizens
  1. functions can be assigned to a variable
  2. function can be passed as parameters to another function
  3. function can be returned from a function
*/

var name = "Vinod"; //string
var age = 24; //number
var married = true; //boolean
var address={       //complex object
    city:'Bangalore',
    state:'Karnataka',
    zip:'577142'
}

var printName = function(firstName, lastName){
    console.log('First Name '+firstName+ ' last name'+lastName);
}
function printFullName(fName, lName){
  
}
//printName("Hari", "Kumar");


let sum = function(a, b){
    console.log('The sum is '+(a+b));
}

let sub = function(a, b){
    console.log('The difference is '+(a - b));
}


//higher order function
let calc = function(func, first, second){
    func(first, second);
}

let multiply = function(a, b ){
    console.log('The product of two numbers is '+(a *b));
}

calc(function(a, b ){
    console.log('The product of two numbers is '+(a *b));
}, 6,6);

//calc(printFullName(firstName, lastName), "Vishnu", "Kumar");

//function returning another function

var totalAmount = function(){
    var calculateTotalBill = function(totalBill, taxAmount){
        console.log('The total amount is '+(totalBill+taxAmount));
    }
    return calculateTotalBill;
}

var result1 = totalAmount();

console.log(result1(100, 20));