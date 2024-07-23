console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

const post = document.createElement("section");
document.body.append(post);
post.classList.add("post");
const postContent = document.createElement("p");
post.append(postContent);
postContent.classList.add("post__content");
postContent.textContent =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";
const footer = document.createElement("footer");
post.append(footer);
footer.classList.add("post__footer");
const postUsername = document.createElement("span");
postUsername.classList.add("post__username");
postUsername.textContent = "@username";
footer.append(postUsername);
const likeButtonJS = document.createElement("button");
likeButtonJS.classList.add("post__button");
likeButtonJS.setAttribute("type", "button");
likeButtonJS.textContent = " ♥ Like";
likeButtonJS.addEventListener("click", handleLikeButtonClick);
footer.append(likeButtonJS);
