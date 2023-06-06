// LOGG INN

// kilde: https://medium.com/swlh/how-to-create-your-first-login-page-with-html-css-and-javascript-602dd71144f1
// Brukte litt chatgpt for å feilsøke kode

const loginForm = document.querySelector(".login-form");
const usernameInput = document.querySelector("#username");
const passwordInput = document.querySelector("#password");

document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    var activeElement = document.activeElement;
    if (activeElement === usernameInput || activeElement === passwordInput) {
      event.preventDefault();

      window.location.href = "hjem.html";
    }
  }
});

// HJEM

// Her er det "enkle" mouseenter og mouseleave events for å vise menuItems når man hovrer

const menuItems = document.querySelectorAll(".menu li");

menuItems.forEach((menuItem) => {
  const subMenu = menuItem.querySelector(".sub-menu");

  menuItem.addEventListener("mouseenter", () => {
    subMenu.style.display = "block";
  });

  menuItem.addEventListener("mouseleave", () => {
    subMenu.style.display = "none";
  });
});

// Likebutton 

function toggleLikeButton() {
  var button = document.querySelector(".card-heart-button");
  button.classList.toggle("liked");
}
