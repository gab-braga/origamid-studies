// activate link menu header
const links = document.querySelectorAll(".header-menu a");
links.forEach((link) => {
  const url = window.location.href;
  const href = link.href;
  if (url.includes(href)) {
    link.classList.add("active");
  }
});

// activate input form budget
const params = new URLSearchParams(window.location.search);
const paramType = params.get("type");
const paramProduct = params.get("product");
const inputType = document.getElementById(paramType);
const inputProduct = document.getElementById(paramProduct);
if (inputType) inputType.checked = true;
if (inputProduct) inputProduct.checked = true;

// activate question expension
const questions = document.querySelectorAll(".faq button");
questions.forEach(addEventQuestion);
function addEventQuestion(question) {
  question.addEventListener("click", handleClickQuestion);
}
function handleClickQuestion(event) {
  const question = event.currentTarget;
  const controls = question.getAttribute("aria-controls");
  const response = document.getElementById(controls);
  response.classList.toggle("active");
  const active = response.classList.contains("active");
  question.setAttribute("aria-expanded", String(active));
}

// gallery imagens bikes
const gallery = document.querySelectorAll(".bike-image img");
gallery.forEach(addEventGallery);
function addEventGallery(image) {
  image.addEventListener("click", handleClickGallery);
}
const container = document.querySelector(".bike-image");
function handleClickGallery(event) {
  if (verifyWidthScreen()) {
    const image = event.currentTarget;
    container.prepend(image);
  }
}
function verifyWidthScreen() {
  const media = window.matchMedia("(min-width: 1000px)");
  return media.matches;
}

// animation
if (window.SimpleAnime) {
  new SimpleAnime();
}
