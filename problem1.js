const inventory = require("./inventory.js")

const problem1 = (inventory)=>{
    let id = 33
    let car = null
    for (let i=0;i<inventory.length;i++){
        if (inventory[i].id===id){
            car = inventory[i]
        }
    }return car
}

module.exports = problem1