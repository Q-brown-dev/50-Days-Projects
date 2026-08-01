window.addEventListener("scroll", () => {
    setTimeout(() => {
        document.getElementById("header").classList.add("fade-out");
    }, 5000)
});