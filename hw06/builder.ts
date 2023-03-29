// interface BuildingBuilder {
//     windows: number,
//     doors: number,
//     floors: number,
// }

class Building {
    constructor(params) {
      // Проверяем, принадлежит ли полученный объект классу BuildingBuilder
      if (params instanceof BuildingBuilder) {
        this.extendProperties(params);
      }
    }
   
    extendProperties(params) {
      for (let param in params) {
        this[param] = params[param];
      }
    }
   }

class BuildingBuilder {
    windows: number;
    doors: number;
    floors: number;
    pool: boolean;
    elevator: boolean;
    constructor() {
      this.windows = 0;
      this.doors = 1;
      this.floors = 1;
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
      this.pool = true;
      return this;
    }
   
    setElevator() {
      this.elevator = true;
      return this;
    }
   
    build() {
      return new Building(this);
    }
   
}