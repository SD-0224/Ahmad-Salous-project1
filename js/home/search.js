import { debounce } from "../function-utility/debounce.js";
import { getCards, setCards } from "./cards.js";
import { filterCards } from "./filter-cards.js";
import { showCards } from "./show-cards.js";
import { sortCards } from "./sort.js";

const search = debounce(async (input) => {
  await setCards(undefined, input);
  const cards = getCards();

  showCards(cards);
  filterCards(sessionStorage.getItem("lastFilter"));
  sortCards(sessionStorage.getItem("lastSort"));
}, 300);

export { search };
