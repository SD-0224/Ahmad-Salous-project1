import { getCards, setCards } from "./cards.js";
import { showCards } from "./show-cards.js";

export const filterCards = async function (filterAs = "") {
  if (filterAs == "") return;
  const cards = getCards();
  const filteredCards = cards.filter((card) => {
    if (card.category == filterAs) {
      return true;
    } else {
      return false;
    }
  });
  await setCards(filteredCards, "");
  showCards(filteredCards);
};
