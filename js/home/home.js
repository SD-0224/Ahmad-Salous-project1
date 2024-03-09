import { showCards } from "./show-cards.js";
import { search } from "./search.js";
import { getCards, setCards } from "./cards.js";
import { sortCards } from "./sort.js";
import { presentCategoriesToFilterBy } from "./present-filter-elements.js";
import { filterCards } from "./filter-cards.js";

await setCards();

//States:
let cards = getCards();
let lastSearch = "";
let lastSort = "";
let lastFilter = "";
//End of states
showCards(cards);
presentCategoriesToFilterBy();

//search event
document.getElementById("site-name-search").addEventListener("input", (e) => {
  const input = e.target.value;
  lastSearch = input;
  //I couldn't find any solution else sessionStorage because of search
  //  function has a debounce which take a 300ms and I cant force the
  //  sort and filter to wait it
  sessionStorage.setItem("lastSort", lastSort);
  sessionStorage.setItem("lastFilter", lastFilter);
  search(input);
});

// sortBy event
document
  .getElementsByClassName("browsers")[0]
  .addEventListener("change", (e) => {
    const sortBy = e.target.value;
    lastSort = sortBy;
    filterCards(lastFilter);
    sortCards(sortBy);
    setCards(undefined, lastSearch);
  });

//filterBy
document
  .getElementsByClassName("browsers")[1]
  .addEventListener("change", (e) => {
    const filterBy = e.target.value;
    lastFilter = filterBy;
    filterCards(filterBy);
    sortCards(lastSort);
    setCards(undefined, lastSearch);
  });
