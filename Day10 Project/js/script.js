const pwd = document.getElementById("pwd");
const toggle = document.getElementById("toggle");
toggle.addEventListener("click", () => {
    if (pwd.type === 'password') {
        pwd.type = 'text'; toggle.textContent = 'Hide❌';
    } else {
        pwd.type = 'password';  toggle.textContent = 'show👀';
    }
})