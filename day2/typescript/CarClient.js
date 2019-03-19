"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Car_1 = require("./Car");
var invokeCarClient = function () {
    var car = new Car_1.Car("Suzuki", "Baleno", "Blue", "KA-04-MW2333");
    //car.setColor("red");
    car.color = "red";
    car.model = "X5";
    car.make = "BMW";
    console.log(car.toString());
};
invokeCarClient();
