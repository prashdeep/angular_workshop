import { Car } from "./Car";
import { Color } from "./Colors";


let invokeCarClient = function(){
   let car:Car = new Car("Suzuki", "Baleno","Blue", "KA-04-MW2333");
   //car.setColor("red");
   car.color = Color.RED;
   car.model = "X5";
   car.make = "BMW"

   console.log(car.toString());

}
invokeCarClient();