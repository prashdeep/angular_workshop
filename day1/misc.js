let user = {
    name:'kishore',
    location:'bangalore',
    dept:'HR'
}

////let userName = user.name;
//let location = user.location;

//destructuring an object in javascript
let {name, location} = user;

//console.log(name);
//console.log(location);

function printLocation ({location}){
  console.log(`The location is ${location}`);
}

printLocation(user);
