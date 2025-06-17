const quotes = [
  "Simplicity is the ultimate sophistication. — Leonardo da Vinci",
  "The less you have, the less you have to worry about.",
  "Minimalism is not a lack of something. It’s simply the perfect amount.",
  "Perfection is achieved not when there is nothing more to add, but when there is nothing left to take away.",
  "Do less, but better.",
  "Clarity comes from simplicity.",
];

const quoteElement = document.querySelector("#quote");
const generateBtn = document.querySelector(".generate-btn");

function showRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  quoteElement.textContent = randomQuote;
}
generateBtn.addEventListener("click", showRandomQuote);
