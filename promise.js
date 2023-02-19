


function promiseOF(){
    let name ="soya hua admi"
    return new Promise((resolve, reject)=>{
        resolve(name)
        reject(console.log(error))
       
    })
    return name;
}
console.log(promiseOF())




// new Promise((resolveOuter) => {
//     let x=300
//     resolveOuter(
//       new Promise((resolveInner) => {
//         if(resolveInner){console.log(x)}
//         setTimeout(resolveInner, 1000);
//       }),
//     );
//   });
  

