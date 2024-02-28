import { searchResults } from "../modules/search.js";

const applySearchResults = async function (input) {
  let results = await searchResults(input);

  return results;
};
export { applySearchResults };
