import { cardData } from "../../modules/fetching-cards.js";
import { searchResults } from "../../modules/search.js";

const getCardData = async function () {
  const results = await cardData();
  return results;
};
let allCards = { cardsInfo: await getCardData() };

const applySearchResults = async function (input) {
  let results = await searchResults(input);
  allCards.cardsInfo = results;
};
async function applyCardData() {
  try {
    const results = document.getElementsByClassName("results")[0];
    results.innerHTML = "";
    allCards.cardsInfo.forEach((card) => {
      const html = `
      <a href = "./Pages/details.html?id=${card.id}" >
            <id hidden>${card.id}</id>
            <img src="./Logos/${card.image}" alt="HTML" />
            <div class="card-info">
              <p>Web Development Languages</p>
              <h3>${card.topic}</h3>
              <br />
              <div class="rate">
                <ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon
                ><ion-icon name="star"></ion-icon
                ><ion-icon name="star"></ion-icon>
                <ion-icon name="star-outline"></ion-icon>
              </div>
              <div class="auther">Author: ${card.name}</div>
            </div>
            </a>`;
      const tempContainer = document.createElement("div");
      tempContainer.setAttribute("id", card.id);
      tempContainer.setAttribute("class", "card");
      tempContainer.innerHTML = html;
      results.appendChild(tempContainer);
    });
  } catch (e) {
    console.log(e);
    const tempContainer = document.createElement("h1");
    tempContainer.innerHTML = "Something went wrong. Web topics failed to load";
    results.appendChild(tempContainer);
  }
}
export { applyCardData, allCards, applySearchResults, getCardData };
