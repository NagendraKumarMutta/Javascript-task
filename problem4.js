const inventory = require("./inventory");
const problem4 = (inventory)=>{
    let carYears = []
    for(let item of inventory){
        carYears.push(item.car_year)
    }
    return carYears
}

module.exports = problem4