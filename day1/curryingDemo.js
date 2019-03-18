var sumOfTwoNumbers = function(one){

    let innerFunction = function(two){
        console.log(`The sum is ${one + two}`)
    }
    return innerFunction;
}

let add2 = sumOfTwoNumbers(2);
let add3 = sumOfTwoNumbers(3);
let add4 = sumOfTwoNumbers(4);

add3(6);


var envSettings = function(host, port, context){
   return function(username, password){
        console.log(`connecting to http://${host}:${port}/${context} with ${username} and ${password}`);
    }
    
}


let dev = envSettings("localhost", 8080,"/app");
let preProd = envSettings("preprod", 8080,"/app");
let prod = envSettings("prod", 8080,"/app");

dev("ram","welcome123");



