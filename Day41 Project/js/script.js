const palette = document.getElementById("palette");

function randomColor() {
    return "#" + Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0");
}

function generatePalette() {

    palette.innerHTML = "";

    for (let i = 0; i < 5; i++) {
        
    const color = randomColor();

    const box = document.createElement("div");

    box.classList.add("color-box");

    box.style.background = color;

    box.innerHTML = 
    `<span class="color-code">${color}</span>`;

    box.addEventListener("click", () => {
        navigator.clipboard.writeText(color);

        alert(`${color} copied!`);
    });
    palette.appendChild(box);
    }
}

generatePalette();