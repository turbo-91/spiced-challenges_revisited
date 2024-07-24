console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

function renderStars(filledStars) {
  // reset the star container before rerendering stars
  starContainer.innerHTML = "";
  for (let counter = 1; counter <= 5; counter++) {
    const image = document.createElement("img");
    if (counter <= filledStars) {
      image.setAttribute("src", "assets/star-filled.svg"); // use filled star image
    } else {
      image.setAttribute("src", "assets/star-empty.svg"); // use empty star image
    }
    starContainer.append(image);
  }
}

renderStars();
