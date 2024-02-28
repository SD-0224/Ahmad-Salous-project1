import { cards, applyCardData } from "./apply-card-data.js";
import { applySearchResults } from "./apply-search-results.js";
import { debounce } from "./debounce.js";
import { sortAuthorName, sortTopicTitle, sortFlag } from "./sortBy.js";

applyCardData();
document.getElementById("site-name-search").addEventListener(
  "input",
  debounce(async (e) => {
    const input = e.target.value;
    const SearchResults = await applySearchResults(input);
    applyCardData(SearchResults);

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
