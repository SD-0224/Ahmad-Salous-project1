const showCards = function (cards) {
  if (typeof cards == "string") {
    document.getElementById("searchCount").innerHTML =
      "Something went wrong. Web topics failed to load";
    return;
  }
  const results = document.getElementsByClassName("results")[0];

  results.innerHTML = "";
  cards.forEach((card) => {
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
};
export { showCards };
