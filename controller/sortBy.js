import { allCards } from "./apply-card-data.js";
import { applyCardData } from "./apply-card-data.js";
const sortData = function (sortBy = null) {
  if (sortBy === null) {
    return;
  }
  let sortedCards = null;
  if (sortBy === "Title") {
    sortedCards = allCards.cardsInfo.sort((a, b) => {
      return a.topic.localeCompare(b.topic);
    });
  } else if (sortBy === "Name") {
    sortedCards = allCards.cardsInfo.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
  }

  allCards.cardsInfo = sortedCards;
  applyCardData();
};

export { sortData };
