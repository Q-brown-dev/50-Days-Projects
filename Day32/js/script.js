window.addEventListener("scroll", () => {
    let scroll  =  window.scrollY;
    let height  = document.body.scrollHeight - window.innerHeight;
    document.getElementById("progress").style.width =
    (scroll / height) * 100 + "%";
})