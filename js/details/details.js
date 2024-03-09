import { showDetails } from "./show-details.js";

document.getElementById("big-title").addEventListener("click", () => {});

if (localStorage.getItem("favorites") == null) {
  localStorage.setItem("favorites", "[]");
}

showDetails();
const addToFavorites = document.getElementById("add-to-favorites-button");
addToFavorites.addEventListener("click", (e) => {
  let favorites = JSON.parse(localStorage.getItem("favorites"));
  let id = parseInt(e.target.className);
  if (favorites.includes(id)) {
    alert("ID already added");
  } else {
    favorites.push(id);
    localStorage.setItem("favorites", JSON.stringify(favorites));
    console.log(favorites);
  }
});
