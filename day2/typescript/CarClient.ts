import { Car } from "./Car";
import { Color } from "./Colors";
import { Speeding } from "./Speeding";


let invokeCarClient = function(){
   let car:Car = new Car("Suzuki", "Baleno",Color.RED, "KA-04-MW2333");
   //car.setColor("red");
   car.color = Color.RED;
   car.model = "X5";
   car.make = "BMW"

  // console.log(car.toString());

  //can only call method present in the interface
  let car2:Speeding = new Car("Suzuki", "Baleno",Color.RED, "KA-04-MW2333", 10);
  car2.accelerate(30);
  car2.accelerate(30);
  console.log(`The speed of the car is ${car2.getSpeed()}`);

}
invokeCarClient();