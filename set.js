

function call(){
    let e=1;
    let b=2;
    let c=4;
    setTimeout(()=>{
        console.log(e)
        setTimeout(()=>{
            console.log(b)
            setTimeout(()=>{
                console.log(c)},7000)
        },4000)
    },2000)
    return e
}

console.log(call())