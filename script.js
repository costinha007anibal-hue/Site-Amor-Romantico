/* ===== Configuração ===== */
const CONFIG = {
  floatingCount: 20,
  floatDurationMin: 9,
  floatDurationMax: 17,
  rainCount: 55,
};

const heartsContainer = document.getElementById("hearts-container");
const mainHeart = document.getElementById("main-heart");
const btnSurprise = document.getElementById("btn-surprise");
const msgCards = document.querySelectorAll(".msg-card");
const tulips = document.querySelectorAll(".tulip");
const tulipMessage = document.getElementById("tulip-message");
const tulipText = document.getElementById("tulip-text");

/* ===== Partículas flutuantes (corações + tulipas) ===== */
function createFloatingParticle() {
  const el = document.createElement("span");
  el.className = "floating-heart";
  const r = Math.random();
  el.textContent = r > 0.55 ? "❤️" : r > 0.25 ? "💕" : "🌷";

  el.style.left = Math.random() * 100 + "%";
  const size = 0.75 + Math.random() * 1.15;
  el.style.fontSize = size + "rem";

  const duration =
    CONFIG.floatDurationMin +
    Math.random() * (CONFIG.floatDurationMax - CONFIG.floatDurationMin);
  el.style.animationDuration = duration + "s";
  el.style.animationDelay = Math.random() * 3.5 + "s";

  heartsContainer.appendChild(el);
  setTimeout(() => el.remove(), (duration + 5) * 1000);
}

function startFloating() {
  for (let i = 0; i < CONFIG.floatingCount; i++) {
    setTimeout(() => createFloatingParticle(), i * 320);
  }
  setInterval(createFloatingParticle, 850);
}

/* ===== Chuva de corações e tulipas ===== */
function createHeartRain() {
  const symbols = ["❤️", "💕", "💗", "💖", "🌷", "💘"];
  for (let i = 0; i < CONFIG.rainCount; i++) {
    setTimeout(() => {
      const el = document.createElement("span");
      el.className = "heart-rain";
      el.textContent = symbols[Math.floor(Math.random() * symbols.length)];
      el.style.left = Math.random() * 100 + "vw";
      el.style.fontSize = 1.1 + Math.random() * 1.5 + "rem";
      const duration = 2.3 + Math.random() * 2.6;
      el.style.animationDuration = duration + "s";
      document.body.appendChild(el);
      setTimeout(() => el.remove(), duration * 1000 + 250);
    }, i * 40);
  }
}

/* ===== Coração principal ===== */
mainHeart.addEventListener("click", () => {
  createHeartRain();
  const carta = document.getElementById("carta");
  if (carta) {
    setTimeout(() => {
      carta.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 200);
  }
});

/* ===== Cartões flip ===== */
msgCards.forEach((card) => {
  const message = card.dataset.message;
  const backP = card.querySelector(".card-back p");
  if (backP && message) backP.textContent = message;

  card.addEventListener("click", () => {
    card.classList.toggle("flipped");
  });
});

/* ===== Jardim de tulipas ===== */
tulips.forEach((tulip) => {
  tulip.addEventListener("click", () => {
    const msg = tulip.dataset.msg;
    if (!msg) return;

    tulips.forEach((t) => t.classList.remove("opened"));
    tulip.classList.add("opened");

    tulipText.textContent = msg;
    tulipMessage.hidden = false;

    tulipMessage.style.animation = "none";
    void tulipMessage.offsetWidth;
    tulipMessage.style.animation = "fade-up 0.45s ease";
  });
});

/* ===== Botão surpresa ===== */
btnSurprise.addEventListener("click", () => {
  createHeartRain();
  btnSurprise.style.transform = "scale(0.94)";
  setTimeout(() => {
    btnSurprise.style.transform = "";
  }, 180);
});

/* ===== Iniciar ===== */
document.addEventListener("DOMContentLoaded", () => {
  startFloating();
});
