const cards = ["queen","queen","king","king"];
const cardsInPlay = [];
function checkForMatch() {
	// body...
	if (cardsInPlay[0]===cardsInPlay[2]) {
		console.log("You found a match!");

	}
	else{
		console.log("Sorry, try again");

	}
}
function flipCard(cardId) {
	// body...
cardsInPlay.push(cards[cardId]);
console.log("User flipped" + cards[cardId]);
if (cardsInPlay.length===2) {
	checkForMatch(0)
	checkForMatch(2)
}
}

flipCard(0);

flipCard(2);