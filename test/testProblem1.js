const inventory = require("../inventory")
const problem1  = require("../problem1")
const car = problem1(inventory)
console.log(`Car 33 is a ${car.car_year} ${car.car_make} ${car.car_model}`)