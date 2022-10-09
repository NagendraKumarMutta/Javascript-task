const inventory = require("./inventory");

const problem6 = (inventory) => {
    let BmwAndAudiArray = []
    for (let item of inventory){
        if(item.car_make === 'BMW' || item.car_make === 'Audi'){
            BmwAndAudiArray.push(item)
        }
    }
    return BmwAndAudiArray
}

module.exports = problem6