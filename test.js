
let x = -123

// var reversed = function(x) {
//     x= String(x)
  
//     return x.split("").reverse().join("");
// };

// console.log(reversed(x))
// [-,123]

function revFun(x){
    if(x = -x){x.toString().split("-")}
    x= x.toString().split("")
    let c = []
    for(let i=x.length-1; i>=0; i--){
        c.push(x[i])
    }
    return c.join("")
}

console.log(revFun(x))


//return x.split("").reverse().join("");


// let arr =[ 6,3,2,4,89,1,-5,-8];



//  function quickSort(arr){
//     if(arr.length <2){return arr}
    
//     let left=[];
//     let pivot = arr[arr.length-1];
//     let right = [];

//     for(let i=0; i<arr.length-1; i++){
//         if(arr[i]< pivot){ left.push(arr[i]) }
//         else { right.push(arr[i]) }
//     }
//     return [...quickSort(left),pivot, ...quickSort(right)]
    
//  };

//  console.log(quickSort(arr))