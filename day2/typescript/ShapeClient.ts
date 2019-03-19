import { Cube } from "./Cube";
import { Square } from "./Square";

let invoker = function(shape:Cube, square?:Square){
    let {height} = shape;
    console.log(`the height of cube is ${height}`)
}

invoker({length:20, breadth:20, height:20})