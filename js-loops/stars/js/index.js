console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

function renderStars() {
  // reset the star container before rerendering stars
  starContainer.innerHTML = "";
  for (let counter = 1; counter <= 5; counter++) {
    const image = document.createElement("img");
    image.setAttribute("src", "assets/star-empty.svg");
    starContainer.append(image);
  }

  //--v-- your code here --v--

  //--^-- your code here --^--
}

renderStars();
