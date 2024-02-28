import { allCards } from "./apply-card-data.js";
import { applyCardData } from "./apply-card-data.js";

const sortTopicTitle = function () {
  const sortedCardsByTopicTitle = allCards.sort((a, b) => {
    return a.topic.localeCompare(b.topic);
  });
  applyCardData(sortedCardsByTopicTitle);
};
const sortAuthorName = function () {
  const sortedCardsByTopicTitle = allCards.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });
  applyCardData(sortedCardsByTopicTitle);
};
export { sortTopicTitle, sortAuthorName };
