const enterToggle = document.getElementById("enterToggle");
const closeToggle = document.getElementById("closeToggle");
const header = document.getElementById("header");
const navbar = document.getElementById("navbar");
const copy = document.getElementById("items-slide").cloneNode(true);
document.getElementById("items").appendChild(copy);

enterToggle.addEventListener("click", () => {
  navbar.style.display = "none";
  header.style.display = "block";
  header.classList.toggle("-translate-y-full");
  header.classList.toggle("translate-y-0");
});

closeToggle.addEventListener("click", () => {
  navbar.style.display = "block";
  header.style.display = "none";
});

AOS.init();
