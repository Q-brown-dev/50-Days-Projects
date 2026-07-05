// First Step
function displayFirst() {
    const displayItem = document.getElementById("displayItem");
    displayItem.classList.toggle("active")
}

// Second Step


// Cards Collection
const card1 = document.getElementById("card-1")
const card2 = document.getElementById("card-2")
const card3 = document.getElementById("card-3")
const card4 = document.getElementById("card-4")

// Message Colletions
const msg1 = document.getElementById("delete-1")
const msg2 = document.getElementById("delete-2")
const msg3 = document.getElementById("delete-3")
const msg4 = document.getElementById("delete-4")

// Button Collection 
const btn1 = document.getElementById("btn1")
const btn1No = document.getElementById("btn1-no")
const btn2 = document.getElementById("btn2")
const btn2No = document.getElementById("btn2-no")
const btn3 = document.getElementById("btn3")
const btn3No = document.getElementById("btn3-no")
const btn4 = document.getElementById("btn4")
const btn4No = document.getElementById("btn4-no")


card1.addEventListener("click", () => {
    msg1.classList.toggle("active-for-card")
})

btn1.addEventListener("click", () => {
    card1.classList.toggle("none")
    setTimeout(() => {
        msg1.classList.toggle("none")
    }, 1000);
})

btn1No.addEventListener("click", () => {
    setTimeout(() => {
        msg1.classList.toggle("none")
    }, 1000);
})



card2.addEventListener("click", () => {
    msg2.classList.toggle("active-for-card")
})

btn2.addEventListener("click", () => {
    card2.classList.add("none")
    setTimeout(() => {
        msg2.classList.add("none")
    }, 1000);
})

btn2No.addEventListener("click", () => {
    setTimeout(() => {
        msg2.classList.add("none")
    }, 1000);
})


card3.addEventListener("click", () => {
    msg3.classList.toggle("active-for-card")
})

btn3.addEventListener("click", () => {
    card3.classList.add("none");
    setTimeout(() => {
        msg3.classList.add("none")
    }, 1000);
})

btn3No.addEventListener("click", () => {
    setTimeout(() => {
        msg3.classList.add("none")
    }, 1000);
})

card4.addEventListener("click", () => {
    msg4.classList.toggle("active-for-card");
})
btn4.addEventListener("click", () => {
    card4.classList.add("none");
    setTimeout(() => {
        msg4.classList.add("none")
    }, 1000);
})


btn4No.addEventListener("click", () => {
   setTimeout(() => {
    msg4.classList.add("none")
   }, 1000);
})