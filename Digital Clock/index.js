//const clock = document.getElementById("clock")
const clock = document.querySelector("#clock")



setInterval(function(){  // setInterval is a function that calls the function every interval of time.
    let date = new Date();
    // console.log(date.toLocaleTimeString())
    clock.innerHTML = date.toLocaleTimeString();
}, 1000);
