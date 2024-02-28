import { cardData } from "../modules/fetching-cards.js";
const allCards = await cardData();
let cards = allCards;

async function applyCardData(input = null) {
  cards = input || allCards;
  const results = document.getElementsByClassName("results")[0];
  try {
    results.innerHTML = "";
    cards.forEach((card) => {
      const html = `
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
            </div>`;
      const tempContainer = document.createElement("a");
      tempContainer.setAttribute("href", "./Pages/details.html");
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
export { applyCardData, cards };
