const quotes = [
  "Believe you can and you're halfway there.",
  "Dream big and dare to fail.",
  "The harder you work, the luckier you get.",
  "Turn your wounds into wisdom.",
  "Success is not final, failure is not fatal."
];

const quoteEl = document.getElementById('quote');
const btn = document.getElementById('new-quote');

btn.addEventListener('click', () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteEl.textContent = quotes[randomIndex];
});


