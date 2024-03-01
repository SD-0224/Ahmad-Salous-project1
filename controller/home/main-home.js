import { applyCardData, applySearchResults } from "./apply-card-data.js";
import { debounce } from "./debounce.js";
import { sortData } from "./sortBy.js";
import { addCategoriesToFilterBy, filterCards } from "./filterBy.js";
let categoryData = null;
let sortBy = null;
applyCardData();
addCategoriesToFilterBy();

document.getElementById("site-name-search").addEventListener(
  "input",
  debounce(async (e) => {
    const input = e.target.value;
    await applySearchResults(input);
    applyCardData();
    sortData(sortBy);
    filterCards(categoryData);
  }, 300)
);

document
  .getElementsByClassName("browsers")[0]
  .addEventListener("change", (e) => {
    sortBy = e.target.value;
    sortData(sortBy);
    filterCards(categoryData);
  });
document
  .getElementsByClassName("browsers")[1]
  .addEventListener("change", (e) => {
    categoryData = e.target.value;
    sortData(sortBy);

    filterCards(e.target.value);
  });
document.querySelectorAll(".card").forEach((card) => {
  card.addEventListener("click", (e) => {
    localStorage.setItem("id", e.currentTarget.id);
  });
});
