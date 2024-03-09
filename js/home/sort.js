import { getCards, setCards } from "./cards.js";
import { showCards } from "./show-cards.js";

export const sortCards = async function (sortBy = "") {
  if (sortBy == "") return;
  let cards = getCards();
  let sortedCards = [];
  if (sortBy === "Title") {
    sortedCards = cards.slice().sort((a, b) => {
      return a.topic.localeCompare(b.topic);
    });
    cards;
    await setCards(sortedCards, "");
  } else if (sortBy === "Name") {
    sortedCards = cards.slice().sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
    await setCards(sortedCards, "");
  }

  showCards(sortedCards);
};
