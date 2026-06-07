/* ============================================================
   ETERNIS — App logic (pure vanilla JS)
   - Renders watch grid from window.ETERNIS_DATA
   - Detail modal with gallery + zoom
   - Mobile nav, scroll nav state, reveal-on-scroll
   ============================================================ */

(function () {
  // Merge any admin-saved overrides from localStorage on top of data.js defaults.
  let data = window.ETERNIS_DATA;
  try {
    const saved = localStorage.getItem("eternis_data");
    if (saved) data = JSON.parse(saved);
  } catch (e) { /* ignore */ }
  window.ETERNIS_CURRENT = data;

  // Open WhatsApp / social links reliably even when embedded in an iframe.
  document.addEventListener("click", (e) => {
    const a = e.target.closest && e.target.closest('a[target="_blank"], a.wa-btn');
    if (!a || !a.href) return;
    e.preventDefault();
    window.open(a.href, "_blank", "noopener,noreferrer");
  });

  /* ---------- Render watch grid ---------- */
  const grid = document.getElementById("watch-grid");
  data.watches.forEach((w, i) => {
    const card = document.createElement("article");
    card.className = "card reveal";
    card.setAttribute("data-id", w.id);
    card.style.transitionDelay = (i % 3) * 80 + "ms";
    card.innerHTML = `
      <div class="card__media">
        <img src="${w.images[0]}" alt="${w.name}" loading="lazy" />
        <span class="card__view">View Piece</span>
      </div>
      <div class="card__divider"></div>
      <h3 class="card__name">${w.name}</h3>
      <div class="card__price">${w.price}</div>
    `;
    card.addEventListener("click", () => openWatch(w.id));
    grid.appendChild(card);
  });

  /* ---------- Contact rendering ---------- */
  const c = data.contact;
  const waLink = (msg) =>
    `https://web.whatsapp.com/send?phone=${c.whatsapp}&text=${encodeURIComponent(msg)}`;

  document.getElementById("wa-main").href = waLink(
    "Hello ETERNIS, I would like to inquire about your collection."
  );
  document.getElementById("contact-email").textContent = c.email;
  document.getElementById("contact-location").textContent = c.address;
  document.getElementById("contact-whatsapp").textContent =
    "+" + c.whatsapp.replace(/(\d{1,3})(\d{3})(\d{3})(\d+)/, "$1 $2 $3 $4");

  const socials = document.getElementById("socials");
  const socialIcons = {
    instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="4"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.8" fill="currentColor"/></svg>',
    facebook: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M13 22v-9h3l.5-4H13V6.5c0-1.2.3-2 2-2h2V1.1C16.7 1 15.5 1 14.3 1 11.7 1 10 2.6 10 5.5V9H7v4h3v9h3z"/></svg>',
    twitter: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>'
  };
  Object.entries(c.socials).forEach(([key, url]) => {
    const a = document.createElement("a");
    a.href = url; a.target = "_blank"; a.rel = "noopener";
    a.setAttribute("aria-label", key);
    a.innerHTML = socialIcons[key] || "";
    socials.appendChild(a);
  });

  /* ---------- Modal / detail ---------- */
  const modal = document.getElementById("modal");
  const modalClose = document.getElementById("modal-close");
  const galleryMain = document.getElementById("gallery-main");
  const galleryMainImg = galleryMain.querySelector("img");
  const galleryThumbs = document.getElementById("gallery-thumbs");
  const detailName = document.getElementById("detail-name");
  const detailPrice = document.getElementById("detail-price");
  const detailDesc = document.getElementById("detail-desc");
  const detailWa = document.getElementById("detail-wa");

  function openWatch(id) {
    const w = data.watches.find((x) => x.id === id);
    if (!w) return;
    detailName.textContent = w.name;
    detailPrice.textContent = w.price;
    detailDesc.textContent = w.description;
    detailWa.href = waLink(`Hello ETERNIS, I'm interested in the ${w.name} (${w.price}). Could you share more details?`);

    galleryMainImg.src = w.images[0];
    galleryMainImg.alt = w.name;
    galleryThumbs.innerHTML = "";
    w.images.forEach((src, idx) => {
      const b = document.createElement("button");
      if (idx === 0) b.classList.add("active");
      b.innerHTML = `<img src="${src}" alt="${w.name} ${idx + 1}" loading="lazy"/>`;
      b.addEventListener("click", () => {
        galleryMainImg.src = src;
        galleryMain.classList.remove("zoomed");
        galleryThumbs.querySelectorAll("button").forEach((x) => x.classList.remove("active"));
        b.classList.add("active");
      });
      galleryThumbs.appendChild(b);
    });

    modal.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    modal.classList.remove("open");
    galleryMain.classList.remove("zoomed");
    document.body.style.overflow = "";
  }

  modalClose.addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => { if (e.target === modal) closeModal(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeModal(); });

  // Zoom (click toggles; on desktop, mouse move pans)
  galleryMain.addEventListener("click", () => {
    galleryMain.classList.toggle("zoomed");
    galleryMainImg.style.transformOrigin = "center center";
  });
  galleryMain.addEventListener("mousemove", (e) => {
    if (!galleryMain.classList.contains("zoomed")) return;
    const r = galleryMain.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width) * 100;
    const y = ((e.clientY - r.top) / r.height) * 100;
    galleryMainImg.style.transformOrigin = `${x}% ${y}%`;
  });

  /* ---------- Nav scroll state + mobile toggle ---------- */
  const nav = document.getElementById("nav");
  const navLinks = document.getElementById("nav-links");
  const navToggle = document.getElementById("nav-toggle");

  window.addEventListener("scroll", () => {
    nav.classList.toggle("scrolled", window.scrollY > 30);
  });
  navToggle.addEventListener("click", () => navLinks.classList.toggle("open"));
  navLinks.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => navLinks.classList.remove("open"))
  );

  /* ---------- Reveal on scroll ---------- */
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

  /* ---------- Footer year ---------- */
  document.getElementById("year").textContent = new Date().getFullYear();
})();
