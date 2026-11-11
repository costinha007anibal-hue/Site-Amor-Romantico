/* ===== Configuração fácil de personalizar ===== */
const CONFIG = {
  // Quantos corações flutuantes continuamente
  floatingHeartsCount: 18,
  // Duração mínima e máxima da animação de subida (segundos)
  floatDurationMin: 8,
  floatDurationMax: 16,
  // Quantos corações na chuva de surpresa
  rainCount: 45,
};

/* ===== Elementos ===== */
const heartsContainer = document.getElementById("hearts-container");
const mainHeart = document.getElementById("main-heart");
const mainMessage = document.getElementById("main-message");
const btnSurprise = document.getElementById("btn-surprise");
const msgCards = document.querySelectorAll(".msg-card");

/* ===== Corações flutuantes contínuos ===== */
function createFloatingHeart() {
  const heart = document.createElement("span");
  heart.className = "floating-heart";
  heart.textContent = Math.random() > 0.3 ? "❤️" : "💕";

  // Posição horizontal aleatória
  heart.style.left = Math.random() * 100 + "%";

  // Tamanho ligeiramente aleatório
  const size = 0.8 + Math.random() * 1.1;
  heart.style.fontSize = size + "rem";

  // Duração e atraso
  const duration =
    CONFIG.floatDurationMin +
    Math.random() * (CONFIG.floatDurationMax - CONFIG.floatDurationMin);
  heart.style.animationDuration = duration + "s";
  heart.style.animationDelay = Math.random() * 4 + "s";

  heartsContainer.appendChild(heart);

  // Remover depois de animar para não acumular DOM
  setTimeout(() => {
    heart.remove();
  }, (duration + 5) * 1000);
}

function startFloatingHearts() {
  // Criar o número inicial
  for (let i = 0; i < CONFIG.floatingHeartsCount; i++) {
    setTimeout(() => createFloatingHeart(), i * 350);
  }
  // Continuar a criar periodicamente
  setInterval(createFloatingHeart, 900);
}

/* ===== Chuva de corações (surpresa) ===== */
function createHeartRain() {
  for (let i = 0; i < CONFIG.rainCount; i++) {
    setTimeout(() => {
      const heart = document.createElement("span");
      heart.className = "heart-rain";
      heart.textContent = ["❤️", "💕", "💗", "💖", "💘"][
        Math.floor(Math.random() * 5)
      ];
      heart.style.left = Math.random() * 100 + "vw";
      heart.style.fontSize = 1 + Math.random() * 1.4 + "rem";
      const duration = 2.2 + Math.random() * 2.5;
      heart.style.animationDuration = duration + "s";
      document.body.appendChild(heart);

      setTimeout(() => heart.remove(), duration * 1000 + 200);
    }, i * 45);
  }
}

/* ===== Coração principal → revela carta ===== */
mainHeart.addEventListener("click", () => {
  mainMessage.hidden = false;
  // Pequena chuva ao revelar
  createHeartRain();
  // Scroll suave até à carta
  setTimeout(() => {
    mainMessage.scrollIntoView({ behavior: "smooth", block: "center" });
  }, 150);
});

/* ===== Cartões interativos (flip) ===== */
msgCards.forEach((card) => {
  const message = card.dataset.message;
  const backP = card.querySelector(".card-back p");
  if (backP && message) {
    backP.textContent = message;
  }

  card.addEventListener("click", () => {
    card.classList.toggle("flipped");
  });
});

/* ===== Botão surpresa ===== */
btnSurprise.addEventListener("click", () => {
  createHeartRain();
  // Pequena vibração visual no botão
  btnSurprise.style.transform = "scale(0.95)";
  setTimeout(() => {
    btnSurprise.style.transform = "";
  }, 180);
});

/* ===== Iniciar ===== */
document.addEventListener("DOMContentLoaded", () => {
  startFloatingHearts();
});
