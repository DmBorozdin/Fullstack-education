interface IBuildingBuilder {
    windows: number,
    doors: number,
    floors: number,
    pool: boolean,
    elevator: boolean,
    setWindows(amount: number) : this,
    setDoors(amount: number) : this,
    setFloors(amount: number) : this,
    setPool(): this,
    setElevator(): this,
}

class Building {
    windows: number;
    doors: number;
    floors: number;
    pool: boolean;
    elevator: boolean;
    constructor(windows: number, doors: number, floors: number, pool : boolean, elevator: boolean) {
      this.windows = windows;
      this.doors = doors;
      this.floors = floors;
      this.pool = pool;
      this.elevator = elevator;
    }
}

class BuildingBuilder implements IBuildingBuilder {
    windows: number;
    doors: number;
    floors: number;
    pool: boolean;
    elevator: boolean;
    constructor() {
      this.windows = 0;
      this.doors = 1;
      this.floors = 1;
      this.pool = false;
      this.elevator = false;
    }
   
    setWindows(amount: number) {
      this.windows = amount;
      return this;
    }
   
    setDoors(amount: number) {
      this.doors = amount;
      return this;
    }
   
    setFloors(amount: number) {
      this.floors = amount;
      return this;
    }
   
    setPool() {
      this['pool'] = true;
      return this;
    }
   
    setElevator() {
      this['elevator'] = true;
      return this;
    }
   
    build() {
      return new Building(this.windows, this.doors, this.floors, this.pool, this.elevator);
    }
   
}

class HouseWithPoolDirector {
  static construct() {
    return new BuildingBuilder()
    .setDoors(10)
    .setWindows(20)
    .setFloors(2)
    .setPool()
    .build();
  }
}

 console.log(HouseWithPoolDirector.construct());