// class Animal {
//   constructor(name, numLegs) {
//     this.name = name
//     this.numLegs = numLegs
//     this.children = []
//   }
//   giveBirth(name){
//         this.children.push(name)
//     }
// }
// const cat = new Animal("Puss", 4)
// const dog = new Animal("dogo", 4)
// cat.giveBirth("Dolly")
// console.log(cat.children) // should print an array with 1 item: ["Dolly"]


// class Human {
//   constructor(name, age, isFriendly) {
//     this.name = name
//     this.age = age
//     this.isFriendly = isFriendly
//   }
// }
// const man = new Human("yossi", 14, true)
// console.log(man)


// class Vehicle {
//     constructor(x, y, speed, fuel) {
//         this.x = x
//         this.y = y
//         this._speed = speed
//         this._fuel = fuel
//         Vehicle.carSold++
//     }
//     set fuel(fuel) {
//         if (fuel < 0 || fuel > 150) {
//             return console.log("Fuel msut be between 0 and 150")
//         }
//         this._fuel = fuel
//     }
//     get fuel() {
//         return this._fuel
//     }
//     set speed(speed) {
//         if (speed < 0) {
//             return console.log("Speed must be positive")
//         }
//         this._speed = speed
//     }
//     get speed() {
//         return this._speed
//     }
//     static getInfo() {
//         console.log("We've sold " + Vehicle.carSold + " vehicles.")
//     }
//     static calculateMoney() {
//         console.log("We've made " + Vehicle.carSold * 30000 + "$")
//     }
// }
// Vehicle.carSold = 0
// const car1 = new Vehicle(1, 2, 3)
// const car2 = new Vehicle(1, 2, 3)
// Vehicle.getInfo()
// Vehicle.calculateMoney()
// const c = new Vehicle()
// c.x = 3
// c.y = 1
// c.speed = -2 // at this point, we'll get the console log saying speed needs to be positive
// console.log(c.speed) // prints undefined


//Vehicle
//-------------
//Key     Value
//carSold 0         //global
//x       string
//y       string
//_speed  number
//_fuel   number
//--------------
//set fuel(fuel): function
//get fuel(fuel): function
//set fuel(speed): function
//get fuel(speed): function
//getInfo(): function
//calculateMoney(): function

