import { cards } from "./apply-card-data.js";
import { applyCardData } from "./apply-card-data.js";
let sortFlag = 0;
const sortTopicTitle = function () {
  const sortedCardsByTopicTitle = cards.sort((a, b) => {
    return a.topic.localeCompare(b.topic);
  });
  applyCardData(sortedCardsByTopicTitle);
  sortFlag = 1;
};
const sortAuthorName = function () {
  const sortedCardsByTopicTitle = cards.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });
  applyCardData(sortedCardsByTopicTitle);
  sortFlag = -1;
};
export { sortTopicTitle, sortAuthorName, sortFlag };
