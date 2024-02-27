import { cardData } from "../modules/fetching-cards.js";

async function applyCardData(input = null) {
  const results = document.getElementsByClassName("results")[0];
  let cards;
  if (input != null) {
    cards = input;
    console.log(cards);
  } else {
    cards = await cardData();
  }
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
}
export { applyCardData };
