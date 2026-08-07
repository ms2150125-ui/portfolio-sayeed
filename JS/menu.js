/* =========================================================
   MOBILE NAVIGATION — 3-line hamburger toggle
   Shared by every page (index, about, blood-request,
   find-blood, contact, login, register)
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");

  if (!hamburger || !navLinks) return;

  // Create a dark overlay behind the sliding menu (used by navbar.css/.responsive.css)
  const overlay = document.createElement("div");
  overlay.className = "nav-overlay";
  document.body.appendChild(overlay);

  function openMenu() {
    hamburger.classList.add("active");
    navLinks.classList.add("active");
    overlay.classList.add("active");
    document.body.classList.add("menu-open");
    hamburger.setAttribute("aria-expanded", "true");
  }

  function closeMenu() {
    hamburger.classList.remove("active");
    navLinks.classList.remove("active");
    overlay.classList.remove("active");
    document.body.classList.remove("menu-open");
    hamburger.setAttribute("aria-expanded", "false");
  }

  function toggleMenu() {
    if (navLinks.classList.contains("active")) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  hamburger.addEventListener("click", toggleMenu);
  overlay.addEventListener("click", closeMenu);

  // Close the menu automatically when a nav link is tapped
  navLinks.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", closeMenu);
  });

  // Close the menu if the viewport is resized back to desktop
  window.addEventListener("resize", function () {
    if (window.innerWidth > 768) {
      closeMenu();
    }
  });

  // Close on Escape key
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeMenu();
  });
});
