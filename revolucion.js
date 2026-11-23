/**
 * Efecto navideño para pagina web.
 * Reutiliza las animaciones existentes con una identidad visual de Navidad.
 * Se reproduce al cargar la pagina.
 */
(function() {
  function inject() {
    const previousOverlay = document.getElementById("revolucion-overlay");
    if (previousOverlay) previousOverlay.remove();

    const overlay = document.createElement("div");
    overlay.id = "revolucion-overlay";
    overlay.classList.add("playing");

    const papelLine = document.createElement("div");
    papelLine.className = "revolucion-papel-line";
    papelLine.setAttribute("aria-hidden", "true");
    ["#b72b32", "#f5c451", "#176b46", "#fff3d3", "#b72b32", "#f5c451", "#176b46", "#fff3d3"].forEach((color, index) => {
      const light = document.createElement("span");
      light.className = "revolucion-papel";
      light.style.setProperty("--paper-color", color);
      light.style.setProperty("--paper-delay", (index * -0.22) + "s");
      papelLine.appendChild(light);
    });
    overlay.appendChild(papelLine);

    const sleigh = document.createElement("div");
    sleigh.className = "revolucion-sleigh";
    sleigh.setAttribute("aria-hidden", "true");
    sleigh.innerHTML = `
      <svg class="revolucion-sleigh-bob" viewBox="0 0 800 230" shape-rendering="crispEdges">
        <defs>
          <g id="pixel-deer">
            <path fill="#74452c" d="M8 52h12V44h12V40h24v4h12v8h8v20H64v8H28v-8H16v-8H8z"/>
            <path fill="#a16b42" d="M24 48h32v24H24zM48 40h16v28H48zM60 28h20v24H60zM76 40h12v12H76z"/>
            <path fill="#513421" d="M16 72h8v30h-8zM36 72h8v30h-8zM56 72h8v30h-8zM72 64h8v38h-8z"/>
            <path fill="#d2a24d" d="M64 28h8v-8h-8v-8h-8v-8h-8v8h8v8h8zM76 24h8v-8h8V8h-8v8h-8zM68 20h8v-8h-8z"/>
            <rect x="76" y="36" width="4" height="4" fill="#241b18"/>
            <rect x="84" y="44" width="6" height="6" fill="#513421"/>
          </g>
          <filter id="nose-glow" x="-150%" y="-150%" width="400%" height="400%">
            <feGaussianBlur stdDeviation="7"/>
          </filter>
        </defs>
        <path fill="#7d1d28" d="M72 124h16v-12h24v-8h210v8h24v36h-16v16h-24v8H136v-8h-32v-8H80v-16H72z"/>
        <path fill="#b72b32" d="M88 124h16v-12h24v-8h194v12h16v24h-16v16H120v-8h-16v-8H88z"/>
        <path fill="#f5c451" d="M112 132h192v8H112zM136 160h184v8H136z"/>
        <text x="296" y="158" fill="#fff3d3" stroke="#7d1d28" stroke-width="2" paint-order="stroke fill" font-family="monospace" font-size="17" font-weight="900" letter-spacing="1" text-anchor="middle">UPM</text>
        <path fill="#8f5a2c" d="M64 176h24v16h32v8h200v-8h16v-16h16v24h-16v8h-24v8H112v-8H88v-8H72v-16h-8z"/>
        <path fill="#ffe17b" d="M104 192h224v4H104z"/>
        <g class="revolucion-gifts">
          <g transform="translate(112 88)">
            <g class="revolucion-gift-wiggle">
              <path fill="#176b46" d="M0 16h40v38H0zM-4 10h48v10H-4zM16 10h8v44h-8z"/>
              <path fill="#f5c451" d="M17 10C-2 2 4-9 13-5l7 15c-1-18 17-17 16-8-1 6-10 8-16 8z"/>
            </g>
          </g>
          <g transform="translate(152 104)">
            <g class="revolucion-gift-wiggle revolucion-gift-wiggle--slow">
              <path fill="#b72b32" d="M0 12h34v32H0zM-4 7h42v9H-4zM14 7h7v37h-7z"/>
              <path fill="#fff3d3" d="M15 7C-2 0 3-10 11-7l7 14c-1-15 15-15 14-7-1 6-9 7-14 7z"/>
            </g>
          </g>
          <g transform="translate(100 130)">
            <g class="revolucion-gift-wiggle revolucion-gift-wiggle--fast">
              <path fill="#f5c451" d="M0 10h30v26H0zM-3 5h36v8H-3zM12 5h6v31h-6z"/>
              <path fill="#b72b32" d="M14 5C-2-1 4-9 11-6l6 11c0-14 14-14 13-6-1 5-8 6-13 6z"/>
            </g>
          </g>
        </g>
        <g class="revolucion-mascot">
          <path fill="#d6aa58" d="M202 53h-8V41h-8V29h-8v-8h8v8h8v12h8v-9h8v-9h8v13h-8v12h-8zM238 53h8V41h8V29h8v-8h-8v8h-8v12h-8v-9h-8v-9h-8v13h8v12h8z"/>
          <path fill="#8f542f" d="M198 54h-12v8h-12v12h20v-8h8zM246 54h12v8h12v12h-20v-8h-8z"/>
          <path fill="#9a6037" d="M202 42h40v8h8v32h-8v8h-40v-8h-8V50h8z"/>
          <path fill="#efc786" d="M202 68h40v12h-8v8h-24v-8h-8zM210 84h24v8h-24z"/>
          <path fill="#d8e9ff" d="M206 58h10v12h-10zM230 58h10v12h-10z"/>
          <path fill="#263859" d="M210 60h4v8h-4zM234 60h4v8h-4z"/>
          <path fill="#513421" d="M218 74h12v4h-12z"/>
          <path fill="#b72b32" d="M202 40h8v-8h12v-8h20v8h12v16h-8v-8h-8v-8h-20v8h-8v8h-8z"/>
          <path fill="#fff3d3" d="M194 40h8v8h-8zM238 32h8v8h-8zM202 48h48v6h-48zM210 34h28v6h-28z"/>
          <path fill="#fff3d3" d="M186 31h8v8h-8z"/>
          <path fill="#b72b32" d="M186 96h68v52h-68zM174 108h16v28h-16zM250 104h12v28h-12z"/>
          <path fill="#fff3d3" d="M186 96h68v8h-68zM186 140h68v8h-68zM190 104h8v8h-8zM242 104h8v8h-8z"/>
          <text x="222" y="125" fill="#176b46" stroke="#fff3d3" stroke-width="1.5" paint-order="stroke fill" font-family="monospace" font-size="18" font-weight="900" letter-spacing="1" text-anchor="middle">ODO</text>
          <path fill="#26251e" d="M186 132h68v8h-68z"/>
          <path fill="#f5c451" d="M214 132h16v8h-16z"/>
          <path fill="#b72b32" d="M180 104h10v24h-10z"/>
          <path fill="#efc786" d="M176 124h10v10h-10z"/>
          <path fill="#7d4a2d" d="M154 132h24v28h-24zM150 140h32v16h-32z"/>
          <path fill="#b78a58" d="M158 136h16v4h-16z"/>
          <g transform="translate(250 102)">
            <g class="revolucion-mascot-wave">
              <path fill="#b72b32" d="M0 0h12v8h12v8h8v12H20v-8H8v-8H0z"/>
              <path fill="#9a6037" d="M28-28h8v-12h8v-8h8v8h8v8h-8v8h8v8h-8v8H40v-8h-8v-8h-4z"/>
              <path fill="#efc786" d="M36-24h4v8h-4zM48-28h4v8h-4z"/>
            </g>
          </g>
        </g>
        <path fill="none" stroke="#d6aa58" stroke-width="4" d="M348 148h40m92 0h8m92 0h8m92 0h8"/>
        <g transform="translate(390 78)"><g class="revolucion-deer-bob"><use href="#pixel-deer"/></g></g>
        <g transform="translate(490 78)"><g class="revolucion-deer-bob revolucion-deer-bob--slow"><use href="#pixel-deer"/></g></g>
        <g transform="translate(590 78)"><g class="revolucion-deer-bob"><use href="#pixel-deer"/></g></g>
        <g transform="translate(690 78)"><g class="revolucion-deer-bob revolucion-deer-bob--slow"><use href="#pixel-deer"/></g></g>
        <g transform="translate(690 78)" shape-rendering="crispEdges">
          <rect x="80" y="40" width="18" height="18" fill="#e71935" opacity=".85" filter="url(#nose-glow)"/>
          <rect x="84" y="44" width="10" height="10" fill="#ff243f"/>
          <rect x="84" y="44" width="4" height="4" fill="#fff3d3"/>
        </g>
      </svg>`;
    overlay.appendChild(sleigh);

    const center = document.createElement("div");
    center.className = "revolucion-center";
    center.innerHTML = `
      <div class="revolucion-hat-wrap">
        <svg class="revolucion-hat" viewBox="0 0 320 250" role="img" aria-label="Árbol de Navidad decorado">
          <defs>
            <linearGradient id="arbol-copa" x1="0" x2="1" y1="0" y2="1">
              <stop stop-color="#48a66a"/><stop offset=".52" stop-color="#17643e"/><stop offset="1" stop-color="#0b3828"/>
            </linearGradient>
          </defs>
          <path d="m160 13 12 23 26 4-19 18 5 26-24-13-24 13 5-26-19-18 26-4z" fill="#f5c451" stroke="#fff0b0" stroke-width="4"/>
          <path d="m160 48-57 63h34l-57 57h42l-66 59h208l-66-59h42l-57-57h34z" fill="url(#arbol-copa)" stroke="#103b2a" stroke-width="7" stroke-linejoin="round"/>
          <path d="M121 111q39 20 78 0m-105 57q66 29 132 0m-157 57q91 34 182 0" fill="none" stroke="#f5c451" stroke-width="5" stroke-linecap="round"/>
          <g fill="#d83a32" stroke="#ffe8b0" stroke-width="3">
            <circle cx="135" cy="111" r="7"/><circle cx="186" cy="123" r="7"/><circle cx="104" cy="166" r="8"/>
            <circle cx="159" cy="178" r="8"/><circle cx="217" cy="163" r="8"/><circle cx="128" cy="214" r="8"/><circle cx="194" cy="213" r="8"/>
          </g>
          <path d="M143 224h34v20h-34z" fill="#8b542f"/>
        </svg>
      </div>
      <div class="revolucion-eyebrow">TEMPORADA NAVIDEÑA</div>
      <h2 class="revolucion-text">¡FELIZ<span>NAVIDAD!</span></h2>
      <div class="revolucion-subtitle">PAZ · AMOR · ALEGRÍA</div>
    `;
    overlay.appendChild(center);

    const colors = ["#176b46", "#b72b32", "#f5c451", "#fff3d3"];
    const rain = document.createElement("div");
    rain.className = "revolucion-rain";
    overlay.appendChild(rain);
    const icons = [
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Cpath d='M32 3v58M3 32h58M11.5 11.5l41 41m0-41-41 41M24 8l8 8 8-8M24 56l8-8 8 8M8 24l8 8-8 8m48-16-8 8 8 8' fill='none' stroke='%23e8f5ee' stroke-width='5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E",
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Cpath d='M8 25h48v34H8z' fill='%23b72b32' stroke='%23fff3d3' stroke-width='3'/%3E%3Cpath d='M27 25h10v34H27zM8 36h48v9H8z' fill='%23f5c451'/%3E%3Cpath d='M32 25C8 24 13 5 23 9c7 3 9 16 9 16 2-11 13-21 19-13 6 8-8 14-19 13z' fill='%23f5c451' stroke='%23fff3d3' stroke-width='2'/%3E%3C/svg%3E"
    ];
    for (let i = 0; i < 26; i++) {
      const ic = document.createElement("img");
      ic.className = "revolucion-confetti revolucion-icon";
      ic.src = icons[i % 2];
      ic.alt = "";
      ic.style.setProperty("--fall-left", Math.random() * 96 + "vw");
      ic.style.setProperty("--fall-top", "0px");
      ic.style.setProperty("--fall-delay", (-Math.random() * 6) + "s");
      ic.style.setProperty("--fall-duration", (4 + Math.random() * 3) + "s");
      ic.style.setProperty("--fall-size", (28 + Math.random() * 20) + "px");
      ic.style.setProperty("--fall-drift", (Math.random() * 14 - 7) + "vw");
      rain.appendChild(ic);
    }
    for (let i = 0; i < 160; i++) {
      const c = document.createElement("div");
      c.className = "revolucion-confetti";
      c.style.setProperty("--fall-left", Math.random() * 100 + "vw");
      c.style.setProperty("--fall-top", (-30 + Math.random() * 120) + "vh");
      c.style.setProperty("--fall-color", colors[Math.floor(Math.random() * colors.length)]);
      c.style.setProperty("--fall-delay", (-Math.random() * 5) + "s");
      c.style.setProperty("--fall-duration", (3.5 + Math.random() * 3) + "s");
      c.style.setProperty("--fall-size", (7 + Math.random() * 10) + "px");
      c.style.setProperty("--fall-drift", (Math.random() * 16 - 8) + "vw");
      const shape = Math.random();
      if (shape > 0.72) c.style.setProperty("--fall-radius", "50%");
      else if (shape > 0.45) c.style.clipPath = "polygon(50% 0, 100% 100%, 0 100%)";
      rain.appendChild(c);
    }
    document.body.appendChild(overlay);

    setTimeout(() => {
      overlay.classList.remove("playing");
      overlay.classList.add("closing");
    }, 8000);
    setTimeout(() => {
      overlay.remove();
    }, 9000);
  }

  window.replayRevolucionEffect = function() {
    banner();
    inject();
  };

  function banner() {
    if (document.getElementById("revolucion-banner")) return;
    const b = document.createElement("div");
    b.id = "revolucion-banner";
    b.className = "revolucion-banner";
    document.body.appendChild(b);

    const t = document.createElement("div");
    t.className = "revolucion-badge";
    t.textContent = "FELIZ NAVIDAD";
    document.body.appendChild(t);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      banner();
      setTimeout(inject, 400);
    });
  } else {
    banner();
    setTimeout(inject, 400);
  }
})();
