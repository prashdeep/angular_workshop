"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Car = /** @class */ (function () {
    /*
        private make:string;
        private model:string;
        private color:string;
        private regNo:string;
    */
    function Car(_make, _model, _color, _regNo) {
        this._make = _make;
        this._model = _model;
        this._color = _color;
        this._regNo = _regNo;
        this._make = _make;
        this._model = _model;
        this._color = _color;
        this._regNo = _regNo;
    }
    Object.defineProperty(Car.prototype, "make", {
        get: function () {
            return this._make;
        },
        set: function (make) {
            this._make = make;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (color) {
            this._color = color;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "model", {
        get: function () {
            return this._model;
        },
        set: function (model) {
            this._model = model;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "regNo", {
        get: function () {
            return this.regNo;
        },
        set: function (regNo) {
            this.regNo = regNo;
        },
        enumerable: true,
        configurable: true
    });
    Car.prototype.toString = function () {
        return "{make: " + this._make + ", model:" + this._model + ", color:" + this._color + ", regNo:" + this._regNo + "}";
    };
    return Car;
}());
exports.Car = Car;
/*
  1. No need to declare private fields, if declared in constructor.
  2. Can make the setters and getters as property
  3.
*/ 
