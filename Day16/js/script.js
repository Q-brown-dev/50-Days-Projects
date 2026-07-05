window.onload = function () {
   // Wait 3 seconds before hiding preloader
   setTimeout(function () {
     document.getElementById("preloader").style.display = "none";
     document.getElementById("mainContent").style.display = "block";
    }, 3000); // 3000ms = 3 seconds
  };    