
//higher order function
let calc = function(func, first, second){
    func(first, second);
}

let multiply = (a, b ) => console.log('The product of two numbers is '+(a *b));

calc(function(a, b ){
    console.log('The product of two numbers is '+(a *b));
}, 6,6);

let greet = () => console.log("Hello, Good morning!!")


//When not to use an arrow function.
/*
  arrow functions cannot be used inside a method.
*/
//Arrow function inside the inner function
// Inside the inner function, the arrow function will inherit 
// the this keyword
let outerFunction = function(){
    console.log(`Inside the outer function, first name is ${this.firstname} and last name is ${this.lastname}`);

    let innerFunction = ()=>{
        console.log(`The full name inside the inner function is ${this.firstname} ${this.lastname}`);
    }
    innerFunction();
};

outerFunction.call({firstname:"Vikram",lastname:'Mehta'});
