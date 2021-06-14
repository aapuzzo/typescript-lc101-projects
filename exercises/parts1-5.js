"use strict";
exports.__esModule = true;
var SpaceLocation_1 = require("./SpaceLocation");
// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 
// Part 1: Declare (5) Variables With Type
// let spacecraftName: string = "Determination";
// let speedMph: number = 17500;
var kilometersToMars = 225000000;
var kilometersToTheMoon = 384400;
// let milesPerKilometer: number = 0.621;
// // Part 2: Print Days to Mars
// let milesToMars: number = kilometersToMars * milesPerKilometer;
// let hoursToMars: number = milesToMars / speedMph;
// let daysToMars: number = hoursToMars / 24;
// Code an output statement here (use a template literal):
// Part 3: Create a Function ("getDaysToLocation")
// Move your output statement from part 2 here. Update the template literal to call
// the function and print the outputs for a Mars trip and a moon trip.
//test prints
// console.log(`${spacecraftName} takes ${getDaysToLocation(kilometersToMars)} days to get to Mars.`);
// console.log(`${spacecraftName} takes ${getDaysToLocation(kilometersToTheMoon)} days to get to the moon.`);
// Part 4: Create a Spacecraft Class
var Spacecraft = /** @class */ (function () {
    //constructor
    function Spacecraft(name, speedMph) {
        this.milesPerKilometer = 0.621;
        this.name = name;
        this.speedMph = speedMph;
    }
    Spacecraft.prototype.getDaysToLocation = function (kilometersAway) {
        var milesAway = kilometersAway * this.milesPerKilometer;
        var hoursToLocation = milesAway / this.speedMph;
        return hoursToLocation / 24;
        //return (((kilometersAway * this.milesPerKilometer) / this.speedMph)/24)
    };
    Spacecraft.prototype.printDaysToLocation = function (location) {
        console.log(this.name + " would take " + this.getDaysToLocation(location.kilometersAway) + " days to get to " + location.name + ".");
    };
    return Spacecraft;
}());
// Create an instance of the class here:
var spaceShuttle = new Spacecraft('Determination', 17500);
var challenger = new Spacecraft("Challenger", 200000);
// Move your output statements from part 3 here. Update the template literals use the
// instance of the class.
// console.log(`It takes ${spaceShuttle.getDaysToLocation(kilometersToMars)} for ${spaceShuttle.name} to reach mars.`);
// console.log(`It takes ${spaceShuttle.getDaysToLocation(kilometersToTheMoon)} for ${spaceShuttle.name} to reach the moon.`);
// console.log(`It takes ${challenger.getDaysToLocation(kilometersToMars)} for ${challenger.name} to reach mars.`);
// console.log(`It takes ${challenger.getDaysToLocation(kilometersToTheMoon)} for ${challenger.name} to reach the moon.`);
spaceShuttle.printDaysToLocation(new SpaceLocation_1.SpaceLocation('Mars', kilometersToMars));
spaceShuttle.printDaysToLocation(new SpaceLocation_1.SpaceLocation('the Moon', kilometersToTheMoon));
// Part 5: Export and Import the SpaceLocation Class
// Add the required import statement BEFORE the part 1 concent.
// Add the printDaysToLocation function to the Spacecraft class.
// Paste in the code from step 6 here: