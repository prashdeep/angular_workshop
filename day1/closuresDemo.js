let vinay={
    name:'Praveen',
    age:32,
    address:{
        city:'Bangalore',
        zip:'577142'
    },

    getName:function(){
        return this.name;
    },
    getAge:function(){
        return this.age;
    },
    setAge:function(age){
        this.age = age;
    },
    setName:function(name){
        this.name = name;
    }
}

console.log(vinay.getAge());
vinay.age = 45;
console.log(vinay.getAge());

//2nd - Method revealing pattern

let methodRevealing = function(){
    let name = 'Praveen';
    let age = 32;
    let address = {
        city:'Bangalore',
        zip:'577142'
    };

    let obj ={
      getName:function(){
          return name;
      },
      setName:function(newName){
        name = newName;
      },
      getAge:function(){
          return age;
      },
      setAge:function(newAge){
          age = newAge;
      }
    }
    return obj;
}();

//IIEF
/*var aFun = function(){
    console.log("hello there!!")
}();


var printNumers = function(){
    for ( let i = 0; i < 10; i++){
        console.log(i)
    }
}()*/

methodRevealing.setAge(67);
console.log(methodRevealing.getAge());
console.log(methodRevealing.setName("Kishan"));
console.log(methodRevealing.getName());


