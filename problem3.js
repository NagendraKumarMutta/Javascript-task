const inventory = require("./inventory")

const problem3 = (inventory)=>{
    let carModels = []
    for (let i=0; i<inventory.length; i++){
        carModels.push(inventory[i].car_model)
    }
    let sortedCarModels = carModels.sort()
    return sortedCarModels
}

module.exports = problem3