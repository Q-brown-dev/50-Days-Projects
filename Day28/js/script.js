//random Number Generstor
const myBtn = document.getElementById("myButton");
const myLable = document.getElementById("myLabel1");
const myLable2 = document.getElementById("myLabel2");
const myLable3 = document.getElementById("myLabel3");
const min = 1;
const max = 6;
let randomNum1;
let randomNum2;
let randomNum3;
myBtn.onclick = function () {
    randomNum1 = Math.floor(Math.random() * max) + min;
    randomNum2 = Math.floor(Math.random() * max) + min;
    randomNum3 = Math.floor(Math.random() * max) + min;
    myLable.textContent = randomNum1;
    myLable2.textContent = randomNum2;
    myLable3.textContent = randomNum3;
}
