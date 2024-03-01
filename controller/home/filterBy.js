import { allCards } from "./apply-card-data.js";
import { applyCardData } from "./apply-card-data.js";
const getCategories = function () {
  const Category = allCards.cardsInfo.map((card) => {
    return card.category;
  });
  return Array.from(new Set(Category));
};
const addCategoriesToFilterBy = function () {
  const Categories = getCategories();

  const FilterBy = document.getElementsByClassName("browsers")[1];
  Categories.forEach((category) => {
    const tempContainer = document.createElement("option");
    tempContainer.setAttribute("value", category);
    tempContainer.innerHTML = category;
    FilterBy.appendChild(tempContainer);
  });
};

const filterCards = function (filterAs = null) {
  if (filterAs === null) {
    return;
  }
  const filteredCards = allCards.cardsInfo.filter((card) => {
    if (card.category == filterAs) {
      return true;
    } else {
      return false;
    }
  });
  let tempCards = allCards.cardsInfo;
  allCards.cardsInfo = filteredCards;
  applyCardData();
  allCards.cardsInfo = tempCards;
};
export { addCategoriesToFilterBy, filterCards };
