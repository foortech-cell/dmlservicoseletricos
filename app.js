// Header background on scroll
const topbar = document.querySelector(".topbar");
const updateTopbar = () => topbar?.classList.toggle("scrolled", window.scrollY > 40);
updateTopbar();
window.addEventListener("scroll", updateTopbar, { passive: true });

// Highlight the nav link matching the section currently in view
const navLinks = document.querySelectorAll(".topbar .links a[href^=\"#\"]");
const trackedSections = Array.from(navLinks)
  .map((a) => document.getElementById(a.getAttribute("href").slice(1)))
  .filter(Boolean);
if (trackedSections.length && "IntersectionObserver" in window) {
  const navObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = entry.target.id;
        navLinks.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + id));
      });
    },
    { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
  );
  trackedSections.forEach((el) => navObserver.observe(el));
}

// Process section: scroll-scrubbed progress line (fills in as you scroll through the section)
const processWrap = document.getElementById("process-wrap");
const processProgress = document.getElementById("process-progress");
const processLineSvg = document.querySelector(".process-line");
const processLineV = document.getElementById("process-line-v");
const processLineVFill = document.getElementById("process-line-v-fill");

function layoutProcessLine() {
  if (!processWrap) return;
  const icons = processWrap.querySelectorAll(".step-icon");
  if (icons.length < 2) return;
  const wrapRect = processWrap.getBoundingClientRect();
  const firstRect = icons[0].getBoundingClientRect();
  const lastRect = icons[icons.length - 1].getBoundingClientRect();

  if (window.innerWidth > 900) {
    // Desktop: horizontal line aligned with the vertical center of the icons
    if (processLineSvg) {
      const topY = firstRect.top + firstRect.height / 2 - wrapRect.top;
      processLineSvg.style.top = topY + "px";
    }
  } else if (processLineV) {
    // Mobile: vertical line running through the icons' centers
    const centerX = firstRect.left + firstRect.width / 2 - wrapRect.left;
    const topY = firstRect.top + firstRect.height / 2 - wrapRect.top;
    const bottomY = lastRect.top + lastRect.height / 2 - wrapRect.top;
    processLineV.style.left = centerX + "px";
    processLineV.style.top = topY + "px";
    processLineV.style.height = Math.max(0, bottomY - topY) + "px";
  }
}

if (processWrap && processProgress) {
  const LINE_LENGTH = 1000;
  let ticking = false;
  const updateProcessLine = () => {
    ticking = false;
    const vh = window.innerHeight;
    const rect = processWrap.getBoundingClientRect();
    const startTop = vh * 0.7;
    const endTop = vh * 0.6 - rect.height;
    const progress = Math.min(1, Math.max(0, (startTop - rect.top) / (startTop - endTop)));
    processProgress.style.strokeDashoffset = String(LINE_LENGTH * (1 - progress));
    if (processLineVFill) processLineVFill.style.height = (progress * 100) + "%";
  };
  updateProcessLine();
  layoutProcessLine();
  window.addEventListener("scroll", () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(updateProcessLine);
    }
  }, { passive: true });
  window.addEventListener("resize", () => {
    layoutProcessLine();
    updateProcessLine();
  });
  window.addEventListener("load", layoutProcessLine);
}

// Animated stat counters — starts counting the moment its element becomes visible (see revealElement below)
function animateCount(el) {
  if (el.dataset.counted) return;
  el.dataset.counted = "1";
  const target = parseInt(el.dataset.count, 10);
  const suffix = el.dataset.suffix || "";
  const duration = 1400;
  const start = performance.now();
  function tick(now) {
    const p = Math.min(1, (now - start) / duration);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.round(eased * target) + suffix;
    if (p < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

function revealElement(el) {
  el.classList.add("in-view");
  if (el.dataset.count) animateCount(el);
  el.querySelectorAll("[data-count]").forEach(animateCount);
}

// Scroll-reveal for sections/cards (counters inside start counting in sync with the fade-in)
const revealTargets = document.querySelectorAll("[data-reveal], [data-reveal-hero-panel], [data-reveal-group]");
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          revealElement(entry.target);
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
  );
  revealTargets.forEach((el) => io.observe(el));
} else {
  revealTargets.forEach(revealElement);
}
// Hero content is above the fold on load — reveal immediately (staggered via transition-delay) instead of waiting on scroll.
document.querySelector("[data-reveal-hero-panel]")?.classList.add("in-view");
document.querySelectorAll("[data-reveal-hero-item]").forEach((el) => revealElement(el));

// Mouse-tracking glow on cards
document.querySelectorAll(".card").forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--x", `${e.clientX - rect.left}px`);
    card.style.setProperty("--y", `${e.clientY - rect.top}px`);
  });
});

const phone = "5541999618109";
const waDefault = "Olá! Vim pelo site e preciso de um eletricista.";
const wa = (msg = waDefault) => `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;

document.querySelectorAll("[data-whatsapp]").forEach((a) => (a.href = wa()));

const menuBtn = document.querySelector("[data-menu]");
const mobileMenu = document.querySelector(".mobile-menu");
menuBtn?.addEventListener("click", () => mobileMenu.classList.toggle("open"));
mobileMenu?.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => mobileMenu.classList.remove("open")));

document.querySelectorAll(".faq-q").forEach((btn) => {
  btn.addEventListener("click", () => btn.closest(".faq-item").classList.toggle("open"));
});

document.querySelectorAll(".filter").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    const cat = btn.dataset.filter;
    document.querySelectorAll(".photo").forEach((photo) => {
      photo.hidden = cat !== "todos" && photo.dataset.cat !== cat;
    });
  });
});

const lightbox = document.querySelector(".lightbox");
const lightboxImg = lightbox?.querySelector("img");
document.querySelectorAll(".photo").forEach((photo) => {
  photo.addEventListener("click", () => {
    lightboxImg.src = photo.dataset.full;
    lightboxImg.alt = photo.querySelector("img").alt;
    lightbox.classList.add("open");
  });
});
lightbox?.addEventListener("click", (e) => {
  if (e.target === lightbox || e.target.closest("[data-close]")) lightbox.classList.remove("open");
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") lightbox?.classList.remove("open");
});

const yearEl = document.querySelector("[data-year]");
if (yearEl) yearEl.textContent = new Date().getFullYear();
