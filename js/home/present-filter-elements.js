import { getCards } from "./cards.js";

export const presentCategoriesToFilterBy = function () {
  const cards = getCards();
  const categories = new Set();
  const FilterBy = document.getElementsByClassName("browsers")[1];
  cards.forEach((card) => {
    if (!categories.has(card.category)) {
      categories.add(card.category);
      const tempContainer = document.createElement("option");
      tempContainer.setAttribute("value", card.category);
      tempContainer.innerHTML = card.category;
      FilterBy.appendChild(tempContainer);
    }
  });
};
