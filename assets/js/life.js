/* ============================================================
   My Profile — life.js
   "My Life" page only: scatters the polaroid wall with random
   tilts / sizes / rhythms, powers the shuffle button (with
   emoji confetti) and the photo lightbox.
   ============================================================ */

(function () {
    "use strict";

    const slots = Array.from(document.querySelectorAll(".p-slot"));
    if (!slots.length) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const rand = (min, max) => Math.random() * (max - min) + min;

    /* Give one slot a brand new random personality */
    function randomizeSlot(slot) {
        slot.style.setProperty("--tilt", rand(-11, 11).toFixed(1) + "deg");
        slot.style.setProperty("--lift", Math.round(rand(0, 58)) + "px");
        slot.style.setProperty("--dur", rand(4.5, 8.5).toFixed(2) + "s");
        slot.style.setProperty("--delay", (-rand(0, 8)).toFixed(2) + "s");

        const card = slot.querySelector(".polaroid");
        if (card) card.style.setProperty("--tape-rot", rand(-9, 9).toFixed(1) + "deg");
    }

    /* Initial scatter — entrance delays make the photos rain in */
    slots.forEach((slot, i) => {
        randomizeSlot(slot);
        slot.style.setProperty("--enter-delay", Math.round(i * 90) + "ms");
    });

    /* ===== MEMORY COUNTER (chip in the shuffle bar) ===== */
    const memCount = document.getElementById("memCount");
    if (memCount) memCount.textContent = slots.length;

    /* ===== EMOJI CONFETTI ===== */
    const EMOJI = ["😂", "🎉", "✨", "❤️", "☕", "🎓", "⚽", "😎", "🤪", "💫", "🍕", "📸"];

    function burstConfetti(x, y) {
        if (reduced || !("animate" in Element.prototype)) return;

        for (let i = 0; i < 18; i++) {
            const s = document.createElement("span");
            s.className = "confetti";
            s.textContent = EMOJI[Math.floor(Math.random() * EMOJI.length)];
            document.body.appendChild(s);

            const angle = rand(-Math.PI * 0.92, -Math.PI * 0.08);
            const dist = rand(90, 260);

            s.animate(
                [
                    {
                        transform: "translate(" + x + "px, " + y + "px) rotate(0deg) scale(1)",
                        opacity: 1
                    },
                    {
                        transform:
                            "translate(" + (x + Math.cos(angle) * dist).toFixed(1) + "px, " +
                            (y + Math.sin(angle) * dist).toFixed(1) + "px) rotate(" +
                            Math.round(rand(-420, 420)) + "deg) scale(" +
                            rand(0.7, 1.5).toFixed(2) + ")",
                        opacity: 0
                    }
                ],
                { duration: rand(900, 1700), easing: "cubic-bezier(0.22, 0.9, 0.3, 1)" }
            ).onfinish = () => s.remove();
        }
    }

    /* ===== SHUFFLE BUTTON ===== */
    const shuffleBtn = document.getElementById("shuffleBtn");

    if (shuffleBtn) {
        shuffleBtn.addEventListener("click", () => {
            slots.forEach(randomizeSlot);

            if (!reduced) {
                shuffleBtn.classList.remove("boing");
                void shuffleBtn.offsetWidth; /* restart the boing */
                shuffleBtn.classList.add("boing");

                const r = shuffleBtn.getBoundingClientRect();
                burstConfetti(r.left + r.width / 2, r.top + r.height / 2);
            }
        });
    }

    /* ===== LIGHTBOX (with prev / next navigation + counter) ===== */
    const lb = document.getElementById("lightbox");
    const lbImg = document.getElementById("lbImg");
    const lbCap = document.getElementById("lbCap");
    const lbCount = document.getElementById("lbCount");
    const cards = Array.from(document.querySelectorAll(".polaroid"));
    let currentIdx = -1;

    function renderCard(card) {
        const img = card.querySelector(".p-img");
        const cap = card.querySelector(".p-cap");
        if (!img) return false;

        lbImg.src = img.currentSrc || img.src;
        lbImg.alt = img.alt || "";
        lbCap.textContent = cap ? cap.textContent : "";
        currentIdx = cards.indexOf(card);
        if (lbCount) lbCount.textContent = (currentIdx + 1) + " / " + cards.length;
        return true;
    }

    function openLightbox(card) {
        if (!lb || card.classList.contains("missing")) return;
        if (renderCard(card)) {
            lb.classList.add("open");
            document.body.style.overflow = "hidden";
        }
    }

    function closeLightbox() {
        if (!lb) return;
        lb.classList.remove("open");
        document.body.style.overflow = "";
    }

    /* jump to the nearest viewable photo in a direction (skips missing ones) */
    function step(dir) {
        if (currentIdx < 0) return;
        const n = cards.length;
        for (let s = 1; s <= n; s++) {
            const idx = (((currentIdx + dir * s) % n) + n) % n;
            const card = cards[idx];
            if (!card.classList.contains("missing")) {
                renderCard(card);
                return;
            }
        }
    }

    if (lb) {
        cards.forEach((card) => {
            card.addEventListener("click", () => openLightbox(card));
            card.addEventListener("keydown", (e) => {
                if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    openLightbox(card);
                }
            });
        });

        lb.addEventListener("click", (e) => {
            if (e.target === lb || e.target.closest(".lb-close")) closeLightbox();
        });

        const prevBtn = lb.querySelector(".lb-prev");
        const nextBtn = lb.querySelector(".lb-next");
        if (prevBtn) prevBtn.addEventListener("click", () => step(-1));
        if (nextBtn) nextBtn.addEventListener("click", () => step(1));

        document.addEventListener("keydown", (e) => {
            if (!lb.classList.contains("open")) return;
            if (e.key === "Escape") {
                closeLightbox();
            /* arrows follow the reading direction (flipped in Arabic/RTL) */
            } else if (e.key === "ArrowLeft") {
                step(document.body.dir === "rtl" ? 1 : -1);
            } else if (e.key === "ArrowRight") {
                step(document.body.dir === "rtl" ? -1 : 1);
            }
        });
    }
})();