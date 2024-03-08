import { GET_DETAILS_DATA } from "../../modules/fetch-details.js";

const APPLY_DETAILS_DATA = async function () {
  const DETAILS_DATA = await GET_DETAILS_DATA();
  let id = DETAILS_DATA.id;
  let category = document.getElementById("title");
  let name = document.getElementById("authorName");
  let image = document.getElementById("image-container");
  let topic = document.getElementById("big-title");
  let description = document.getElementById("more-details");
  let subtopics = document.getElementsByClassName("sub-topics")[0];
  let button = document.getElementById("add-to-favorites-button");

  button.setAttribute("class", id);
  category.innerHTML = DETAILS_DATA.category;
  name.innerHTML = DETAILS_DATA.name;
  image.setAttribute("src", `../Logos/${DETAILS_DATA.image}`);
  topic.innerHTML = DETAILS_DATA.topic;
  description.querySelector("p").innerHTML = DETAILS_DATA.description;
  DETAILS_DATA.subtopics.forEach((topic) => {
    let subtopicsDiv = document.createElement("div");
    subtopicsDiv.setAttribute("class", "topic");
    let subtopicsIcon = document.createElement("ion-icon");
    subtopicsIcon.setAttribute("name", "checkmark-circle-outline");
    subtopicsDiv.appendChild(subtopicsIcon);
    let tempP = document.createElement("p");
    tempP.innerHTML = topic;
    subtopicsDiv.appendChild(tempP);
    subtopics.appendChild(subtopicsDiv);
  });
};

export { APPLY_DETAILS_DATA };
