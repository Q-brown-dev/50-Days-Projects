// 3D TILT EFFECT
document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("mousemove", (e) => {
    let x = e.offsetX;
    let y = e.offsetY;
    let rotateX = (y / 200) * 20;
    let rotateY = (x / 200) * -20;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateX(0) rotateY(0)";
  });
});