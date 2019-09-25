const clock = document.querySelector('.container');

myTimer(); // for immediate appearance of time as soon as page loads
setInterval(myTimer, 1000); // interval starts after given time

function myTimer(){
    clock.innerHTML = new Date().toLocaleTimeString();
}