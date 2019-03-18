
// 1st step
/*let outerFunction = function(firstname, lastname){

    let innerFunction = function(){
        console.log(`The full name is ${firstname} ${lastname}`);
    }
    innerFunction();
};

outerFunction("Vikram",'Mehta');
*/

//2nd step

let outerFunction = function(){
    console.log(`Inside the outer function, first name is ${this.firstname} and last name is ${this.lastname}`);
    let that = this;
    let innerFunction = function(){
        console.log(`The full name inside the inner function is ${that.firstname} ${that.lastname}`);
    }
    innerFunction();
};

outerFunction.call({firstname:"Vikram",lastname:'Mehta'});