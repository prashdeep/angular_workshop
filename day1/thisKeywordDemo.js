//'use strict'
//this keyword exmplaination
/*
  1. Inside an object
  2. inside a function
  3. Using new operator
*/

//the this keyword in the context of object

let employee = {
    "firstname":"Harish",
    "lastname":'Kumar',
    "department":'HR',
    "dependents":[
        {
            'name':'Suma',
            'relationship':'Spouse'
        },
        {
            "name":'Manu',
            'relationship':'son'
        }
    ],
    getFullName: function(){
        console.log(`
           The full name of employee is 
           ${this.firstname + this.lastname}  `);
    }
};


//employee.getFullName();

// 2. this inside the function

let totalPrice = function(tip, stateTax, centralTax){
    console.log(this);
    //console.log('state tax'+stateTax);
    //console.log('central tax '+centralTax);
    //console.log( `The total bill is ${this.totalAmount + this.taxAmount/100 * this.totalAmount + tip}`)
}

let obj={totalAmount:500, taxAmount:25}
let obj2={totalAmount:2000, taxAmount:25}
//totalPrice.call(obj2, 20, 5,5);
//totalPrice.apply(obj2, [20, 5,5]);
//totalPrice();

//let result = totalPrice.bind(obj, 40, 5 , 5);
//result();

//this with the new keyword

let Customer = function(){
    console.log(`The name of the customer is ${this}`);
}

let c = new Customer();
console.log(c);

