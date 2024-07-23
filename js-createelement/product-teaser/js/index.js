console.clear();

const productName = "Queen angelfish";
const description =
  "With their bright colors and deep, laterally compressed bodies, marine angelfishes are some of the more conspicuous residents of the aquarium. The queen angelfish grows to be 45 cm. With neon blue and yellow scales and iridescent purple and orange markings, surprisingly it is not conspicuous, and actually hides very well, and is very shy.";
const category1 = "Freshwater";
const category2 = "Large aquarium";
const category3 = "Plankton Diet";
const price = "149,99 €";
const imageSrc =
  "https://unsplash.com/photos/3VOTHTrE614/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjU5NTM3NTA2&force=true&w=640";

const product = document.createElement("article");
document.body.append(product);
product.classList.add("product");
product.innerHTML = `<div class="product__body">
        <div class="product__text-container">
          <h2 class="product__name">${productName}</h2>
          <ul class="product__categories">
            <li class="product__category">${category1}</li>
            <li class="product__category">${category2}</li>
            <li class="product__category">${category3}</li>
          </ul>
          <p class="product__description">
          ${description}
          </p>
        </div>
        <div class="product__image-container">
          <img
            class="product__image"
            src=${imageSrc}
          />
        </div>
      </div>
      <footer class="product__footer">
        <span class="product__price">${price}</span>
        <button type="button" class="product__buy-button" data-js="second-button">Buy</button>
      </footer>`;

const secondButton = document.querySelector('[data-js="second-button"]');
secondButton.addEventListener("click", (event) => {
  console.log(`${productName} ${price}`);
});

// const productBody = document.createElement("div");
// productBody.classList.add("product__body");
// const productTextContainer = document.createElement("div");
// productTextContainer.classList.add("product__text-container");
// const productName = document.createElement("h2");
// productName.classList.add("product__name");
// productName.textCont = name;
