// Count down
const count1 = document.querySelector(".count-1");
const count2 = document.querySelector(".count-2");
const count3 = document.querySelector(".count-3");
// Text
const text1 = document.getElementById("text");
const text2 = document.getElementById("text2");
const text3 = document.getElementById("text3");
const text4 = document.getElementById("text4");
const text5 = document.getElementById("text5");
const text6 = document.getElementById("text6");
const text7 = document.getElementById("text7");
const text8 = document.getElementById("text8");
const text9 = document.getElementById("text9");
const text10 = document.getElementById("text10");
const text11 = document.getElementById("text11");
const text12 = document.getElementById("text12");
const text13 = document.getElementById("text13");
const text14 = document.getElementById("text14");
const text15 = document.getElementById("text15");
const text16 = document.getElementById("text16");
const text17 = document.getElementById("text17");
const text18 = document.getElementById("text18");
const text19 = document.getElementById("text19");
const text20 = document.getElementById("text20");
const text21 = document.getElementById("text21");
const text22 = document.getElementById("text22");
const text23 = document.getElementById("text23");
const text24 = document.getElementById("text24");
const text25 = document.getElementById("text25");
const text26 = document.getElementById("text26");
const text27 = document.getElementById("text27");
const text28 = document.getElementById("text28");
const text29 = document.getElementById("text29");
const text30 = document.getElementById("text30");


window.onload = function TextChangeColor() {
    musicToggle.classList.add("active");
    count1.style.color = "tan";
    setTimeout(() => {
        count1.style.display = "none";
        count2.classList.add("fadeInUp");
        count2.style.color = "tan";
    }, 10000);
    setTimeout(() => {
        count2.style.display = "none";
        count3.classList.add("fadeInUp");
        count3.style.color = "tan";
    }, 15000);
    setTimeout(() => {
        count3.style.display = "none";
        text1.classList.add("fadeInUp");
        text1.style.color = "tan";
    }, 23000);
    window.setTimeout(() => {
        count3.style.display = "none"
        text1.style.display = "none"
        text2.classList.add("fadeInUp")
        text2.style.color = "tan"
    }, 30000)
    setTimeout(() => {
        text2.style.display = "none"
        text3.style.color = "tan"
        text3.classList.add("fadeInUp")
    }, 34000)
    setTimeout(() => {
        text3.style.display = "none"
        text4.classList.add("fadeInUp");
        text4.style.color = "tan"
    }, 40000);
    setTimeout(() => {
        text4.style.display = "none"
        text5.classList.add("fadeInUp");
        text5.style.color = "tan";
    }, 47000);
    setTimeout(() => {
        text5.style.display = "none"
        text6.classList.add("fadeInUp")
        text6.style.color = "tan";
    }, 48000);
    setTimeout(() => {
        text6.style.display = "none"
        text7.classList.add("fadeInUp");
        text7.style.color = "tan";
    }, 49000);
    setTimeout(() => {
        text7.style.display = "none"
        text8.classList.add("fadeInUp")
        text8.style.color = "tan"
    }, 50000);
    setTimeout(() => {
        text8.style.display = "none";
        text9.classList.add("fadeInUp")
        text9.style.color = "tan";
    }, 51000);
    setTimeout(() => {
        text9.style.display = "none";
        text10.classList.add("fadeInUp");
        text10.style.color = "tan";
    }, 52000);
    setTimeout(() => {
        text10.style.display = "none";
        text11.classList.add("fadeInUp");
        text11.style.color = "tan";
    }, 54000);
    setTimeout(() => {
        text11.style.display = "none";
        text12.classList.add("fadeInUp");
        text12.style.color = "tan";
    }, 55000);
    setTimeout(() => {
        text12.style.display = "none";
        text13.classList.add("fadeInUp");
        text13.style.color = "tan";
    }, 57000);
    setTimeout(() => {
        text13.style.display = "none";
        text14.classList.add("fadeInUp")
        text14.style.color = "tan";
    }, 59000);
    setTimeout(() => {
        text14.style.display = "none";
        text15.classList.add("fadeInUp")
        text15.style.color = "tan";
    }, 60000);
    setTimeout(() => {
        text15.style.display = "none";
        text16.classList.add("fadeInUp")
        text16.style.color = "tan";
    }, 61000);
    setTimeout(() => {
        text16.style.display = "none"
        text17.classList.add("fadeInUp");
        text17.style.color = "tan";
    }, 62000);
    setTimeout(() => {
        text17.style.display = "none";
        text18.classList.add("fadeInUp");
        text18.style.color = "tan"
    }, 63000);
    setTimeout(() => {
        text18.style.display = "none";
        text19.classList.add("fadeInUp");
        text19.style.color = "tan";
    }, 65000);
    setTimeout(() => {
        text19.style.display = "none";
        text20.classList.add("fadeInUp");
        text20.style.color = "tan";
    }, 66000);
    setTimeout(() => {
        text20.style.display = "none";
        text21.classList.add("fadeInUp");
        text21.style.color = "tan";
    }, 67000);
    setTimeout(() => {
        text21.style.display  = "none";
        text22.classList.add("fadeInUp");
        text22.style.color = "tan";
    }, 69000);
    setTimeout(() => {
        text22.style.display = "none";
        text23.classList.add("fadeInUp");
        text23.style.color = "tan";
    }, 72000);
    setTimeout(() => {
        text23.style.display = "none";
        text24.classList.add("fadeInUp");
        text24.style.color = "tan";
    }, 73000);
    setTimeout(() => {
        text24.style.display = "none";
        text25.classList.add("fadeInUp");
        text25.style.color = "tan";
    }, 74000);
    setTimeout(() => {
        text25.style.display = "none";
        text26.classList.add("fadeInUp");
        text26.style.color = "tan";
    }, 75000);
    setTimeout(() => {
        text26.style.display = "none";
        text27.classList.add("fadeInUp");
        text27.style.color = "tan";
    }, 93000);
    setTimeout(() => {
        text27.style.display = "none";
        text28.classList.add("fadeInUp");
        text28.style.color = "tan";
    }, 100000);
}

//Music Toogle
const music = document.getElementById("bg-music");
const musicToggle = document.getElementById("music-toggle")


function toggleMusic() {
    if (music.paused) {
        music.play();
        musicToggle.innerHTML = "🎶"
        musicToggle.classList.add("active");
    } else {
        music.pause();
        musicToggle.innerText = "🔇"
        musicToggle.classList.remove("active")
    }
}


//Optional : start with lower volume

music.volume = 7;