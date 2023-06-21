import "./style.css";
const numbers = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];

const symbols = [
  { symbol: "&spades;", color: "black" },
  { symbol: "&hearts;", color: "red" },
  { symbol: "&clubs;", color: "black" },
  { symbol: "&diams;", color: "red" }
];

function showRandomCard() {
  const cardElement = document.getElementById("randomCard");
  const randomSymbolsIndex = Math.floor(Math.random() * symbols.length);
  const randomNumberslIndex = Math.floor(Math.random() * numbers.length);
  const symbolInCard = symbols[randomSymbolsIndex];
  const numberInCard = numbers[randomNumberslIndex];
  const upperSymbol = document.getElementById("upperSymbol");

  upperSymbol.innerHTML = symbolInCard.symbol;
  upperSymbol.style.color = symbolInCard.color;
  const lowerSymbol = document.getElementById("lowerSymbol");

  lowerSymbol.innerHTML = symbolInCard.symbol;
  lowerSymbol.style.color = symbolInCard.color;
  const numberElement = document.getElementById("numbers");

  numberElement.innerHTML = numberInCard;
  if (symbolInCard.symbol === "&diams;" || symbolInCard.symbol === "&hearts;") {
    numberElement.style.color = "red";
  } else {
    numberElement.style.color = "black";
  }
}
const button = document.getElementById("cardButton");

button.addEventListener("click", showRandomCard);

showRandomCard();
setInterval(showRandomCard, 1000);
