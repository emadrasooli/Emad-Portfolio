const enterToggle = document.getElementById("enterToggle");
const closeToggle = document.getElementById("closeToggle");
const header = document.getElementById("header");
const navbar = document.getElementById("navbar");
// const copy = document.getElementById("items-slide").cloneNode(true);
// document.getElementById("items").appendChild(copy);

const swiper = new Swiper(".mySwiper", {
  autoplay: {
    delay: 5,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  loop: true,
  slidesPerView: "auto",
  watchSlidesProgress: true,
});

enterToggle.addEventListener("click", () => {
  navbar.style.display = "none";
  header.style.display = "block";
});

closeToggle.addEventListener("click", () => {
  navbar.style.display = "block";
  header.style.display = "none";
});

// Get the current Year for footer
document.addEventListener("DOMContentLoaded", () => {
  const year = new Date().getFullYear();
  document.getElementById("current-year").textContent = year;
});

AOS.init();

// Email Js
(function () {
  emailjs.init({
    publicKey: "yWTxi2fCQIMu-GBcm",
  });
})();

const submitEmail = document.getElementById("submit");
const name = document.getElementById("fullName");
const email = document.getElementById("email");
const message = document.getElementById("message");
const checkAnimation = document.getElementById("lottie-animation");
checkAnimation.style.display = "none";

submitEmail.addEventListener("click", function submit(e) {
  e.preventDefault();
  if (name.value === "") {
    document.getElementById("warnning-name").style.display = "block";
    if (email.value === "") {
      document.getElementById("warnning-email").style.display = "block";
      if (message.value === "") {
        document.getElementById("warnning-message").style.display = "block";
      }
    }
  } else {
    SendMail();
    checkAnimation.style.display = "block";
    setTimeout(() => {
      checkAnimation.style.display = "none";
    }, 2000);
  }
});

function SendMail() {
  var params = {
    from_name: document.getElementById("fullName").value,
    email_id: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };
  emailjs
    .send("service_dvjtrbi", "template_5g0irfa", params)
    .then(function (res) {});

  name.value = "";
  email.value = "";
  message.value = "";
}

// copied number
const link = document.getElementById("phoneNumber");
const copyMessage = document.getElementById("copy");

link.addEventListener("click", function (event) {
  event.preventDefault();
  copyMessage.style.display = "block";

  const textToCopy = link.textContent;

  navigator.clipboard.writeText(textToCopy);
  setTimeout(() => {
    copyMessage.style.display = "none";
  }, 3000);
});

lottie.loadAnimation({
  container: document.getElementById("lottie-animation"),
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "./assets/Animation - 1726572800513.json",
});

lottie.loadAnimation({
  container: document.getElementById("lottie-available"),
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "./assets/Animation - 1726658785959.json",
});

document.getElementById("scrollUp").addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
