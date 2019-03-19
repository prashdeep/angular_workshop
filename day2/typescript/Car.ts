import { Color } from "./Colors";
import { Speeding } from "./Speeding";

export class Car implements Speeding{

/*    
    private make:string;
    private model:string;
    private color:string;
    private regNo:string;
*/
    constructor(private _make:string, private _model:string, private _color:Color, private _regNo:string, private _speed?:number){
        this._make = _make;
        this._model = _model;
        this._color = _color;
        this._regNo = _regNo;
        this._speed = _speed;
    }

    set make(make:string){
        this._make = make;
    }

    get make(){
        return this._make;
    }
    set color(color:Color){
        this._color = color;
    }

    get color(){
        return this._color;
    }

    set model(model:string){
        this._model = model;
    }

    get model(){
        return this._model;
    }

    set regNo(regNo:string){
        this.regNo = regNo;
    }

    get regNo():string{
        return this.regNo;
    }

    toString():string {
        return `{make: ${this._make}, model:${this._model}, color:${this._color}, regNo:${this._regNo}}`;
    }

    accelerate(value:number){
        this._speed += value;
    }
    slowDown(value:number){
        this._speed -= value;
    }

    halt(){
        this._speed = 0;
    }

    getSpeed():number{
        return this._speed;
    }
 
}

/*
  1. No need to declare private fields, if declared in constructor.
  2. Can make the setters and getters as property
  3.
*/

