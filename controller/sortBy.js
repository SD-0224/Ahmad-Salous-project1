import { allCards } from "./apply-card-data.js";
import { applyCardData } from "./apply-card-data.js";
let sortFlag = 0;
const sortTopicTitle = function () {
  const sortedCardsByTopicTitle = allCards.cardsInfo.sort((a, b) => {
    return a.topic.localeCompare(b.topic);
  });
  allCards.cardsInfo = sortedCardsByTopicTitle;
  applyCardData();
  sortFlag = 1;
};
const sortAuthorName = function () {
  const sortedCardsByAuthorName = allCards.cardsInfo.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });
  allCards.cardsInfo = sortedCardsByAuthorName;

  applyCardData();
  sortFlag = -1;
};
export { sortTopicTitle, sortAuthorName, sortFlag };
