let envelope = document.getElementById("envelope");
let questionBox = document.getElementById("questionBox");
let yesBtn = document.getElementById("yesBtn");
let noBtn = document.getElementById("noBtn");

let envelopeClicks = 0;

envelope.addEventListener("click", () => {
  envelopeClicks++;

  envelope.style.transform =
    `translate(${Math.random()*100 - 50}px, ${Math.random()*100 - 50}px)`;

  if (envelopeClicks === 3) {
    questionBox.classList.remove("hidden");
  }
});

/* NO BUTTON RUNS */

noBtn.addEventListener("mouseenter", () => {
  noBtn.style.position = "absolute";
  noBtn.style.left = Math.random()*80 + "%";
  noBtn.style.top = Math.random()*80 + "%";
});

/* YES OPENS */

yesBtn.addEventListener("click", () => {
  showScreen("messageScreen");
});

/* NEXT */

document.getElementById("nextBtn").addEventListener("click", () => {
  showScreen("coffeeScreen");
});

/* COFFEE YES/NO */

let noCoffee = document.getElementById("noCoffee");
let yesCoffee = document.getElementById("yesCoffee");

noCoffee.addEventListener("mouseenter", () => {
  noCoffee.style.transform = "scale(0.6)";
  noCoffee.style.position = "absolute";
  noCoffee.style.left = Math.random()*80 + "%";
  noCoffee.style.top = Math.random()*80 + "%";
});

yesCoffee.addEventListener("click", () => {
  showScreen("finalScreen");
});

/* SCREEN SWITCHER */

function showScreen(id) {
  document.querySelectorAll(".screen").forEach(s => {
    s.classList.remove("active");
  });

  document.getElementById(id).classList.add("active");
}
