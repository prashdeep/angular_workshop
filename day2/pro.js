let handlerCallback = fetch('https://jsonplaceholder.typicode.com/todsdfdfos/1');

handlerCallback.then( (success)=> {
    console.log('came inside the success');
    console.log(success);
}, (errorResponse)=> {
    console.log('came inside the error response');
    console.log(errorResponse)
}).catch(error => {
    console.log('Came inside the error block');
    console.log(error);
})