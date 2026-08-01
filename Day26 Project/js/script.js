// CUSTOM CURSOR

const cursor = document.getElementById("cursor");

document.addEventListener("mousemove", (e) => {
 cursor.style.top = e.clientY+ "px";
 cursor.style.left = e.clientX+"px";
})



/* SCROLL REVEAL */
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", ()=>{
  sections.forEach(sec=>{
    let top = sec.getBoundingClientRect().top;
    if(top < window.innerHeight - 100){
      sec.classList.add("show");
    }
  });
});