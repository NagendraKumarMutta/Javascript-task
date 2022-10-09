const inventory = require("../inventory");
const problem4  = require("../problem4");

const carYears = problem4(inventory)

let count=0
for (let item of carYears){
    if (item<2000){
        count+=1
    }
}
console.log(count)