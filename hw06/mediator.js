var OfficalDealer = /** @class */ (function () {
    function OfficalDealer() {
        this.customers = [];
    }
    OfficalDealer.prototype.orderAuto = function (customer, auto, info) {
        var name = customer.getName();
        console.log("Order name: ".concat(name, ". Order auto is ").concat(auto));
        console.log("Additional info: ".concat(info));
        this.addToCustomersList(name);
    };
    OfficalDealer.prototype.addToCustomersList = function (name) {
        this.customers.push(name);
    };
    OfficalDealer.prototype.getCustomersList = function () {
        return this.customers;
    };
    return OfficalDealer;
}());
;
var Customer = /** @class */ (function () {
    function Customer(name, dealerMediator) {
        this.name = name;
        this.dealerMediator = dealerMediator;
    }
    Customer.prototype.getName = function () {
        return this.name;
    };
    Customer.prototype.makeorder = function (auto, info) {
        this.dealerMediator.orderAuto(this, auto, info);
    };
    return Customer;
}());
;
var mediator = new OfficalDealer();
var ivan = new Customer('Ivan Ivanovich', mediator);
var alex = new Customer('Alexey Alexeevich', mediator);
ivan.makeorder('Tesla', 'With autopilot');
alex.makeorder('BMW', 'M package');
console.log(mediator.getCustomersList());
