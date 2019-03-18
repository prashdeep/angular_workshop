let users=[
    {
        name:'Vinay',
        age:22,
        city:'Bangalore'
    },
    {
        name:'Naveen',
        age:24,
        city:'Chennai'
    },    {
        name:'Madhu',
        age:33,
        city:'Mumbai'
    },   
    {
        name:'Kiran',
        age:38,
        city:'Pune'
    },   
    {
        name:'Jeeven',
        age:44,
        city:'Vizag'
    }
];

let userNames = users.map(user=> user.name);
//console.log(userNames);

let peopleMoreThan30 = users.filter(user => user.age > 30);
let peopleLessThan30 = users.filter(user => user.age < 30);

let userNamesLessThan30 = users.filter(user => user.age > 30).map(user => user.name);
console.log(userNamesLessThan30);