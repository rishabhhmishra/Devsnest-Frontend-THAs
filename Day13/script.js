const quoteDiv = document.getElementById("quoteDiv");
const btn = document.getElementById("btn");

btn.addEventListener("click", generateQuote);

generateQuote();

async function generateQuote() {
  const res = await fetch("https://api.quotable.io/random");
  const data = await res.json();

  quoteDiv.innerHTML = data.content;
}

