import { applyCardData, applySearchResults } from "./apply-card-data.js";
import { debounce } from "./debounce.js";
import { sortAuthorName, sortTopicTitle, sortFlag } from "./sortBy.js";
import { addCategoriesToFilterBy } from "./filterBy.js";
applyCardData();
addCategoriesToFilterBy();

document.getElementById("site-name-search").addEventListener(
  "input",
  debounce(async (e) => {
    const input = e.target.value;
    await applySearchResults(input);
    applyCardData();
    if (sortFlag === 1) {
      sortTopicTitle();
    } else if (sortFlag === -1) {
      sortAuthorName();
    }
  }, 300)
);

document
  .getElementsByClassName("browsers")[0]
  .addEventListener("change", (e) => {
    const selectedItem = e.target.value;
    if (selectedItem === "Title") sortTopicTitle();
    if (selectedItem === "Name") sortAuthorName();
  });
