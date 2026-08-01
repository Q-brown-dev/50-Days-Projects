const obj = document.querySelector(".object");
const objContainer = document.querySelector(".container");
function twentyPercent() {
    obj.style.height = "800px"
    objContainer.style.height ="800px"
    obj.textContent = "80%"
}


function fourtyPercent() {
    obj.style.height = "600px";
    objContainer.style.height = "600px"
    obj.textContent = "60%"
}

function sixtyPercent() {
    obj.style.height = "400px";
    objContainer.style.height = "400px"
    obj.textContent = "40%"
}

function hundredPercent() {
    obj.style.height = "0px";
    objContainer.style.height = "0px"
    obj.textContent = "0%"
}