import { applyCardData } from "./apply-card-data.js";
import { applySearchResults } from "./apply-search-results.js";
applyCardData();

document
  .getElementById("site-name-search")
  .addEventListener("change", async (e) => {
    const input = e.target.value;
    console.log(input);
    const SearchResults = await applySearchResults(input);
    applyCardData(SearchResults);
  });
