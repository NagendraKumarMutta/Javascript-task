const inventory = require("../inventory")
const problem3 = require("../problem3")
const sortedCarModels = problem3(inventory)
for (let item of sortedCarModels){
    console.log(item)
}