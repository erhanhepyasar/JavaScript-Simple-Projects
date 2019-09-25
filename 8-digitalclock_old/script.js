const clock = document.querySelector('.container');

setInterval(myTimer, 1000);

function myTimer(){
    clock.innerHTML = new Date().toLocaleTimeString();
}