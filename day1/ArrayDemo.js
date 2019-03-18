let users=["ravi","vikas","vinod","prem","hari"];

/*
let newUsers = users.map(function (value,index, array){
  return value + '  belongs to Department - HR '
});
*/
let newUsers = 
users.map(value => value + '  belongs to Department - HR ');

console.log(newUsers);