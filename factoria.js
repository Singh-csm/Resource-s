
// function fact(n){
//     return (n ==1 || n==0 )? 1: n*fact(n-1);
// }

function fact(  n  ){
    if(n==1 || n==0 ){return 1}
    return n*fact(n-1);
}

function factorial(n)
{
    // single line to find factorial
    return (n == 1 || n == 0) ? 1 : n * factorial(n - 1);
}
  
function facto(n){
    let result =1;
    for(let i=2; i<=n; i++){
        result= result*i
    }
    return result
}
console.log(fact(29))
 console.log(factorial(5))
// console.log(fact(4))
// console.log(fact(5))
// console.log(fact(6))
 console.log(facto(2))