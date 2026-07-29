/* ==========================================================================
   Portafolio — Samuel Pérez Serna
   Sin dependencias externas. / No external dependencies.
   ========================================================================== */

(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* --- Barra de navegación / Navigation bar ------------------------------- */

  function initNav() {
    var nav = document.getElementById("nav");
    var burger = document.getElementById("nav-burger");
    var links = document.getElementById("nav-links");
    if (!nav || !burger || !links) return;

    var onScroll = function () {
      nav.classList.toggle("is-stuck", window.scrollY > 24);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    var closeMenu = function () {
      burger.setAttribute("aria-expanded", "false");
      links.classList.remove("is-open");
      document.body.classList.remove("is-locked");
    };

    burger.addEventListener("click", function () {
      var open = burger.getAttribute("aria-expanded") === "true";
      burger.setAttribute("aria-expanded", String(!open));
      links.classList.toggle("is-open", !open);
      document.body.classList.toggle("is-locked", !open);
    });

    links.addEventListener("click", function (event) {
      if (event.target.closest("a")) closeMenu();
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") closeMenu();
    });

    // Al volver a escritorio, el menú móvil no debe quedar abierto.
    // Going back to desktop must not leave the mobile menu open.
    window.matchMedia("(min-width: 769px)").addEventListener("change", closeMenu);
  }

  /* --- Sección activa en el menú / Scrollspy ------------------------------ */

  function initScrollSpy() {
    var links = Array.prototype.slice.call(
      document.querySelectorAll('#nav-links a[href^="#"]')
    );
    if (!links.length || !("IntersectionObserver" in window)) return;

    var byId = {};
    var sections = [];

    links.forEach(function (link) {
      var section = document.querySelector(link.getAttribute("href"));
      if (!section) return;
      byId[section.id] = link;
      sections.push(section);
    });

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          links.forEach(function (link) { link.classList.remove("is-current"); });
          var active = byId[entry.target.id];
          if (active) active.classList.add("is-current");
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach(function (section) { observer.observe(section); });
  }

  /* --- Aparición al hacer scroll / Scroll reveal -------------------------- */

  function initReveal() {
    var items = Array.prototype.slice.call(document.querySelectorAll(".reveal"));
    if (!items.length) return;

    if (reduceMotion || !("IntersectionObserver" in window)) {
      items.forEach(function (item) { item.classList.add("is-visible"); });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries, obs) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );

    items.forEach(function (item) { observer.observe(item); });
  }

  /* --- Rotador de roles del hero / Hero role rotator ---------------------- */

  function initRoleRotator() {
    var rotator = document.getElementById("role-rotator");
    if (!rotator) return;

    var roles = Array.prototype.slice.call(rotator.querySelectorAll(".hero__role"));
    if (roles.length < 2 || reduceMotion) return;

    var index = 0;
    var timer = null;

    var advance = function () {
      roles[index].classList.remove("is-active");
      index = (index + 1) % roles.length;
      roles[index].classList.add("is-active");
    };

    var start = function () {
      if (timer === null) timer = window.setInterval(advance, 2600);
    };
    var stop = function () {
      window.clearInterval(timer);
      timer = null;
    };

    start();

    // No animar en una pestaña oculta. / Don't animate in a hidden tab.
    document.addEventListener("visibilitychange", function () {
      if (document.hidden) stop();
      else start();
    });
  }

  /* --- Arranque / Boot ---------------------------------------------------- */

  function init() {
    initNav();
    initScrollSpy();
    initReveal();
    initRoleRotator();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
