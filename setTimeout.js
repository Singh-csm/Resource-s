
function x() {
    for (let i = 1; i <= 5; i++) {  //12345   
      setTimeout(function () {
        console.log(i);
      },i*1000);
    }
  }
  x();