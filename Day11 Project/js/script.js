const btn = document.querySelector(".btn");
const bulb = document.querySelector(".bulb")
let message = "ON";
let message2 = "OFF";
btn.addEventListener("click", () => {
   bulb.classList.toggle("ON");
   btn.textContent = message;
});

