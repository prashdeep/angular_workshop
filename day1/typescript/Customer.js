"use strict";
exports.__esModule = true;
var Customer = /** @class */ (function () {
    function Customer(name, address, accountBalance) {
        this.name = name;
        this.address = address;
        this.accountBalance = accountBalance;
    }
    Customer.prototype.getName = function () {
        return this.name;
    };
    return Customer;
}());
exports.Customer = Customer;
