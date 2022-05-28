// Subscribe Form
const go = document.getElementById("go");
const input = document.querySelector("input");
const errorMessage = document.querySelector(".error-message");

go.addEventListener("click", (e) => {
  e.preventDefault();
  if (!input.value.includes("@") || !input.value) {
    errorMessage.style.opacity = "1";
    input.classList.add("error");
  } else {
    errorMessage.style.opacity = "0";
    input.classList.remove("error");
  }
});

setInterval(() => {
  if (input.value.includes("@")) {
    errorMessage.style.opacity = "0";
    input.classList.remove("error");
  }
}, 1);

// Nav
const nav = document.querySelector("nav");
const openMenu = document.getElementById("open");
const closeMenu = document.getElementById("close");

nav.classList = "close-nav";
closeMenu.classList = "no-show";

openMenu.addEventListener("click", () => {
  openMenu.classList = "no-show";
  closeMenu.classList = "";
  nav.classList.remove("close-nav");
});
closeMenu.addEventListener("click", () => {
  closeMenu.classList = "no-show";
  openMenu.classList = "";
  nav.classList = "close-nav";
});
document.addEventListener("mouseup", (e) => {
  if (e.target != nav && e.target != nav.parentNode) {
    closeMenu.classList = "no-show";
    openMenu.classList = "";
    nav.classList = "close-nav";
  }
});

// Testimonial Scroll
const radio = document.querySelector(".radio");
const radioButtons = [...radio.children];
const testimonials = document.querySelector("section");
const article = [...testimonials.children];

radioButtons[0].style.background = "hsl(12, 88%, 59%)";
radioButtons.forEach((button) => {
  button.addEventListener("click", () => {
    let current = radioButtons.indexOf(button);

    for (let i = 0; i < radioButtons.length; i++) {
      radioButtons[i].style.background = "white";
    }
    radioButtons[current].style.background = "hsl(12, 88%, 59%)";

    position = article[current].getBoundingClientRect().x;
    testimonials.scrollTo(position, 0);
  });
});
