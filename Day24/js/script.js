const menu = document.getElementById("menu");
const home = document.getElementById("home");
const back = document.getElementById("back");
const list = document.getElementById("list");



menu.addEventListener("click", () => {
    list.classList.add("active")
})

home.addEventListener("click", () => {
    list.classList.remove("active");
})


back.addEventListener("click", () => {
    list.classList.remove("active");
})




