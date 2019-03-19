//simple value assignment
//let value = 10;

//synchronous code.
/*value = function(){
    console.log(`This will be printed first ....`)
    return 10;
}();*/

//asynchronous code..
/*value = function(){
    setTimeout(()=>{
        console.log('Came inside the setTimeout function..')
        return 10;
    }, 2000);
}()
console.log(`The value is ${value}`);
*/

let handler = new Promise(function(resolve, reject){
  
    setTimeout(resolve({username:'Vinay'}), 2000);
    
});

handler.then(function(data){
    console.log('success case' );
    console.log(data);
}).catch(function(error){
    console.log(`There was an error message ${error}`);
})