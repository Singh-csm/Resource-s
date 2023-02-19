
let num1 = "11"; let num2 = "123"

const addString= function(num1, num2){
    // let num1= (num1).split("").map(Number)
    // let num2= (num2).split("").map(Number)

    var x = Number(num1)
    var y = Number(num2)
  
    let z= ((x+y).toString())
    console.log(typeof z)
    return z
};

console.log(addString(num1, num2))

// let num1 = "11";
// let num2 = "123";
// var x = Number(num1)
// var y = Number(num2)
// console.log(x+y)