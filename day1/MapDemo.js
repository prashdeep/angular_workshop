let users1=[
    {
        name:'Vinay',
        age:22,
        city:'Bangalore',
        salary:22000
    },
    {
        name:'Naveen',
        age:24,
        city:'Chennai',
        salary:25000
    },    
    {
        name:'Madhu',
        age:33,
        city:'Mumbai',
        salary:35000
    },   
    {
        name:'Kiran',
        age:38,
        city:'Pune',
        salary:30000
    },   
    {
        name:'Jeeven',
        age:44,
        city:'Vizag',
        salary:55000
    }
];

/*let userNames = users.map(user=> user.name);
//console.log(userNames);

let peopleMoreThan30 = users.filter(user => user.age > 30);
let peopleLessThan30 = users.filter(user => user.age < 30);

let userNamesLessThan30 = users.filter(user => user.age > 30)
                                .map(user => user.name);
console.log(userNamesLessThan30);
*/
let totalUsersSalary = users1.map(user => user.salary).reduce((p, c)=> {
  
    return p * c;
}, 1);
//console.log(`The total salary is ${totalUsersSalary}`)

//users1.map(user => user.name).forEach(name => console.log(name));
users1.sort((user1, user2)=> {
    if (user1.age > user2.age){
        return 1;
    } else if (user1.age < user2.age ){
        return -1;
    } 
    return 0;
}).map(user => user.name).forEach(name => console.log(name))