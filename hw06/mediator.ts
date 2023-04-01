class OfficalDealer {
    customers: string[] = [];

    orderAuto(customer: Customer, auto: string, info: string) {
        const name = customer.getName();
        console.log(`Order name: ${name}. Order auto is ${auto}`);
        console.log(`Additional info: ${info}`);
        this.addToCustomersList(name);
    }

    addToCustomersList(name: string) {
        this.customers.push(name);
    }

    getCustomersList() {
        return this.customers;
    }
};

class Customer {
    name: string;
    dealerMediator: OfficalDealer;
    constructor(name: string, dealerMediator: OfficalDealer) {
        this.name = name;
        this.dealerMediator = dealerMediator;
    }

    getName() {
        return this.name;
    }

    makeorder(auto: string, info: string) {
        this.dealerMediator.orderAuto(this, auto, info);
    }
};

const mediator = new OfficalDealer();
const ivan = new Customer('Ivan Ivanovich', mediator);
const alex = new Customer('Alexey Alexeevich', mediator);
ivan.makeorder('Tesla', 'With autopilot');
alex.makeorder('BMW', 'M package');
console.log(mediator.getCustomersList());