const quotes = [
  {
    text: "Simplicity is the ultimate sophistication.",
    author: "Leonardo da Vinci",
  },
  {
    text: "The less you have, the less you have to worry about.",
    author: "Buddhist Proverb",
  },
  {
    text: "Minimalism is not a lack of something. It’s simply the perfect amount.",
    author: "Nicholas Burroughs",
  },
  {
    text: "Do less, but better.",
    author: "Dieter Rams",
  },
  {
    text: "Perfection is achieved not when there is nothing more to add, but when there is nothing left to take away.",
    author: "Antoine de Saint-Exupéry",
  },
  {
    text: "Clarity comes from simplicity.",
    author: "Greg McKeown",
  },
  {
    text: "Simplicity boils down to two steps: Identify the essential. Eliminate the rest.",
    author: "Leo Babauta",
  },
  {
    text: "The ability to simplify means to eliminate the unnecessary so that the necessary may speak.",
    author: "Hans Hofmann",
  },
  {
    text: "Simplicity is the keynote of all true elegance.",
    author: "Coco Chanel",
  },
  {
    text: "Less is more.",
    author: "Ludwig Mies van der Rohe",
  },
];

const quoteElement = document.querySelector("#quote");
const generateBtn = document.querySelector(".generate-btn");

function showRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  quoteElement.textContent = `"${randomQuote.text}" — ${randomQuote.author}`;
}

generateBtn.addEventListener("click", showRandomQuote);
