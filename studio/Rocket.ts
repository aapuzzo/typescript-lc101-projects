import { Payload } from './Payload';
import { Cargo } from './Cargo';
import { Astronaut } from './Astronaut';

export class Rocket{
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[] = [];
    astronauts: Astronaut[] = [];  

    //constructor
    constructor(name: string, totalCapacityKg:  number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }

    sumMass(items: Payload[]): number{
        //loop through to get sum
        let sum: number = 0;
        for (let i = 0; i < items.length; i++){
            sum += items[i].massKg
        }
        return sum;
    }
    //mass of astronaut and their cargo
    currentMassKg(): number{
        return this.sumMass(this.astronauts) + this.sumMass(this.cargoItems)
    }
    //checks if weight is below maximum
    canAdd(item: Payload): boolean{
        return this.currentMassKg() + item.massKg <= this.totalCapacityKg
    }
    //checks canAdd function to verify and add if true, else returns false
    addCargo(cargo: Cargo): boolean{
        if(this.canAdd(cargo)){
            this.cargoItems.push(cargo);
            return true;
        }
        return false;        
    }
    //adds another astronaut if true, else returns false
    addAstronaut(astronaut: Astronaut): boolean {
        if(this.canAdd(astronaut)) {
            this.astronauts.push(astronaut);
            return true;
        }
        return false;        
    }

}