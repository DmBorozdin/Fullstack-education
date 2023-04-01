var Door = /** @class */ (function () {
    function Door() {
    }
    Door.prototype.open = function () {
        console.log('Opening door');
    };
    Door.prototype.close = function () {
        console.log('Closing door');
    };
    return Door;
}());
var Security = /** @class */ (function () {
    function Security(door) {
        this.doorOpen = false;
        this.door = door;
    }
    Security.prototype.open = function (password) {
        if (this.authenticate(password)) {
            this.door.open();
            this.doorOpen = true;
        }
        else {
            console.log('Wrong password!');
            this.doorOpen = false;
        }
    };
    Security.prototype.authenticate = function (password) {
        return password === '12345';
    };
    Security.prototype.close = function () {
        if (this.doorOpen) {
            this.door.close();
            this.doorOpen = false;
        }
        else {
            console.log('You cant close door');
        }
    };
    return Security;
}());
var door = new Security(new Door());
door.open('invalid');
door.close();
door.open('12345');
door.close();
