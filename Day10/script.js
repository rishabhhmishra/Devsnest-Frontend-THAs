const cards = document.querySelectorAll(".card");
const container = document.querySelector(".container");
const resetBtn = document.querySelector(".btn");

let cardsSelected = [];
let cardsId = [];
let cardsWon = [];

function flipCard() {
  this.classList.add("flip");
  cardsSelected.push(this.getAttribute("data-name"));
  cardsId.push(this.getAttribute("data-id"));
  
  if (cardsSelected.length > 2) {
    this.classList.remove("flip");
  }
  if (cardsSelected.length === 2) {
    setTimeout(checkForMatch, 500);
  }
}

function checkForMatch() {
  let firstCard = cards[cardsId[0] - 1];
  let secondCard = cards[cardsId[1] - 1];

  if (cardsId[0] === cardsId[1]) {
   
    cardsId.pop();
    cardsSelected.pop();
  } else if (cardsSelected[0] === cardsSelected[1]) {
  
    firstCard.classList.add("hide");
    secondCard.classList.add("hide");

    cardsWon.push(cardsSelected);
    if (cardsWon.length === cards.length / 2) {
      container.innerHTML = `
        <h1>You Won!!</h1>
      `;
      resetBtn.innerHTML = "Play Again?";
      container.classList.add("won");
    }
  } else {
    removeFlip(firstCard, secondCard);
  }

  cardsSelected = [];
  cardsId = [];
}

function removeFlip(card1, card2) {
  card1.classList.remove("flip");
  card2.classList.remove("flip");
}

(function shuffleCards() {
  cards.forEach((card) => {
    let randomOrder = Math.floor(Math.random() * cards.length);
    card.style.order = randomOrder;
  });
})();

resetBtn.addEventListener("click", () => {
  cards.forEach((card) => card.classList.add("reset"));
  setTimeout(() => location.reload(), 500);
});

cards.forEach((card) => card.addEventListener("click", flipCard));