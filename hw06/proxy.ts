class Door {
    open() {
        console.log('Opening door')
    }

    close() {
        console.log('Closing door')
    }
}
class Security {
    door: Door;
    doorOpen = false;
    constructor(door) {
        this.door = door;
    }

    open(password: string) {
        if (this.authenticate(password)) {
            this.door.open();
            this.doorOpen = true;
        } else {
            console.log('Wrong password!');
            this.doorOpen = false;
        }
    }

    authenticate(password: string) {
        return password === '12345'
    }

    close() {
        if (this.doorOpen) {
            this.door.close();
            this.doorOpen = false;
        } else {
            console.log('You cant close door');
        }
    }
}
const door = new Security(new Door());
door.open('invalid');
door.close();
door.open('12345');
door.close();
