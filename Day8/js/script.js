function updateClock() {
 const    now = new  Date();

 let hours = now.getHours().toString().padStart(2,'0');
 let minute = now.getMinutes().toString().padStart(2,'0');
 let seconds = now.getSeconds().toString().padStart(2,'0');
 
 document.getElementById("clock").textContent = `${hours}:${minute}:${seconds}`;


}

setInterval(updateClock, 1000);
updateClock();