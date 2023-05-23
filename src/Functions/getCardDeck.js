export const getCardDeck = () => {
  const suits = ["spades", "clubs", "hearts", "diamonds"];
  const number = [
    "ace",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "jack",
    "queen",
    "king",
  ];
  const value = [10, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];
  let deck = [];
  suits.map((suit) => {
    number.map((number, i) => {
      deck.push({ name: `${number}_of_${suit}`, value: value[i] });
    });
  });
  return deck;
};
