var Building = /** @class */ (function () {
    function Building(windows, doors, floors, pool, elevator) {
        this.windows = windows;
        this.doors = doors;
        this.floors = floors;
        this.pool = pool;
        this.elevator = elevator;
    }
    return Building;
}());
var BuildingBuilder = /** @class */ (function () {
    function BuildingBuilder() {
        this.windows = 0;
        this.doors = 1;
        this.floors = 1;
        this.pool = false;
        this.elevator = false;
    }
    BuildingBuilder.prototype.setWindows = function (amount) {
        this.windows = amount;
        return this;
    };
    BuildingBuilder.prototype.setDoors = function (amount) {
        this.doors = amount;
        return this;
    };
    BuildingBuilder.prototype.setFloors = function (amount) {
        this.floors = amount;
        return this;
    };
    BuildingBuilder.prototype.setPool = function () {
        this['pool'] = true;
        return this;
    };
    BuildingBuilder.prototype.setElevator = function () {
        this['elevator'] = true;
        return this;
    };
    BuildingBuilder.prototype.build = function () {
        return new Building(this.windows, this.doors, this.floors, this.pool, this.elevator);
    };
    return BuildingBuilder;
}());
var HouseWithPoolDirector = /** @class */ (function () {
    function HouseWithPoolDirector() {
    }
    HouseWithPoolDirector.construct = function () {
        return new BuildingBuilder()
            .setDoors(10)
            .setWindows(20)
            .setFloors(2)
            .setPool()
            .build();
    };
    return HouseWithPoolDirector;
}());
console.log(HouseWithPoolDirector.construct());
