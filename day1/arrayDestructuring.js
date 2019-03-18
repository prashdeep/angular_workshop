//rest operator ...

//let team = ['Dhoni','Virat','Ganguly','Sachin'];
let teamStr = 'Dhoni Virat Ganguly Sachin';
let team = teamStr.split(' ');


let [captain, vcaptain, ...rest] = team;

console.log(`Captain is ${captain} and VCaptain is ${vcaptain}`);
rest.forEach(player => console.log(player));

