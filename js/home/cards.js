import { fetchCards } from "../fetching/fetch-cards.js";

let cards = [];

export const setCards = async function (newCards, input = "") {
  if (newCards === undefined && input === "") {
    cards = await fetchCards();
  } else if (input != "") {
    cards = await fetchCards(input);
  } else {
    cards = newCards;
  }
};
export const getCards = function () {
  return cards;
};
