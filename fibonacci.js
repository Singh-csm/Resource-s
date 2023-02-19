

// var csm = [0,1,1,2];
// var csm = [0,1,1,2,3,5];


function fibonacci(n){
    var csm = [0,1];
    for(let i=2; i<n; i++){
        csm[i] = csm[i-1] + csm[i-2]
    }
        return csm
};

console.log(fibonacci(2))
console.log(fibonacci(3))
console.log(fibonacci(4))
console.log(fibonacci(5))
console.log(fibonacci(6))
console.log(fibonacci(7))
console.log(fibonacci(8))



var fib = function(n) {
    if(n>1){
            let csm=[0,1];
        for(let i=2; i<n; i++){
            csm[i] = csm[i-1]+csm[i-2]
        }
        return csm[i]
    }else{return 0}
    };

    console.log(fib(2))