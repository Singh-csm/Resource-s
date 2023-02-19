console.log(100);

setTimeout(()=>{
    console.log("nishant")
},4000);

new Promise(()=>{
    console.log("vinti");
    setTimeout(()=>{
        console.log("csm");
    },4000)
});

new Promise((resolveOuter) => {
    resolveOuter(
      new Promise((resolveInner) => {
        setTimeout(resolveInner, 1000);
      }),
    );
  });
  

console.log(20000);

function x(){
    let n =23;
    let z = 20;
    sum()
    function sum(){
        console.log(n+z)
    }
}
console.log(x())