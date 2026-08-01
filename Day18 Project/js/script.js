const redBtn = document.querySelector('.red');
const blueBtn = document.querySelector('.blue');
const greenBtn = document.querySelector('.green');
const whiteBtn = document.querySelector(".white")

redBtn.addEventListener('click', () => {
  document.body.style.backgroundColor = 'crimson';
});

blueBtn.addEventListener('click', () => {
  document.body.style.backgroundColor = 'royalblue';
});

greenBtn.addEventListener('click', () => {
  document.body.style.backgroundColor = 'forestgreen';
});

whiteBtn.addEventListener("click", () => {
  document.body.style.backgroundColor = 'white'
})