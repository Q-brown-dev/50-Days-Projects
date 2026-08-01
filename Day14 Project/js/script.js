const colorInput = document.getElementById("colorPicker");
const container = document.getElementById("colorBox");

colorInput.addEventListener("input", () => {
    container.style.backgroundColor = colorInput.value;
})