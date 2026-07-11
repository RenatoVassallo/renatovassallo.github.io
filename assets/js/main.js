/* main.js — progressive enhancement only. Site is fully usable without JS. */
(function () {
  "use strict";

  // --- Sticky header shadow on scroll ---
  var header = document.querySelector(".site-header");
  if (header) {
    var onScroll = function () {
      header.classList.toggle("is-stuck", window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  // --- Mobile disclosure nav ---
  var toggle = document.querySelector(".nav__toggle");
  var panel = document.querySelector(".nav__panel");
  if (toggle && panel) {
    var setOpen = function (open) {
      panel.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", String(open));
    };
    toggle.addEventListener("click", function () {
      setOpen(!panel.classList.contains("is-open"));
    });
    panel.addEventListener("click", function (e) {
      if (e.target.closest("a")) setOpen(false);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && panel.classList.contains("is-open")) {
        setOpen(false);
        toggle.focus();
      }
    });
  }

  // --- Copy buttons (code blocks + .cmd) ---
  var copy = function (text, btn) {
    var done = function () {
      var prev = btn.textContent;
      btn.textContent = "copied ✓";
      setTimeout(function () { btn.textContent = prev; }, 1400);
    };
    if (navigator.clipboard) { navigator.clipboard.writeText(text).then(done); }
  };
  document.querySelectorAll(".cmd").forEach(function (cmd) {
    var btn = cmd.querySelector(".cmd__copy");
    var code = cmd.querySelector("code");
    if (btn && code) {
      btn.addEventListener("click", function () { copy(code.textContent.trim(), btn); });
    }
  });
  // --- Writing search filter ---
  var search = document.getElementById("post-search");
  if (search) {
    var list = document.getElementById("post-list");
    var empty = document.getElementById("post-empty");
    var cards = Array.prototype.slice.call(list.querySelectorAll(".post"));
    search.addEventListener("input", function () {
      var q = search.value.trim().toLowerCase();
      var visible = 0;
      cards.forEach(function (c) {
        var hay = (c.getAttribute("data-title") || "") + " " + (c.getAttribute("data-tags") || "");
        var show = !q || hay.indexOf(q) !== -1;
        c.hidden = !show;
        if (show) visible++;
      });
      if (empty) empty.hidden = visible !== 0;
    });
  }

  document.querySelectorAll(".prose pre > code, .post-body pre > code").forEach(function (code) {
    var pre = code.parentNode;
    if (pre.querySelector(".code-copy")) return;
    var btn = document.createElement("button");
    btn.className = "code-copy";
    btn.type = "button";
    btn.textContent = "copy";
    btn.addEventListener("click", function () { copy(code.textContent, btn); });
    pre.style.position = "relative";
    pre.appendChild(btn);
  });

  // --- Dark Modern: color function-call identifiers (a name immediately
  //     before "(") yellow, which the token-based highlighter can't infer ---
  document.querySelectorAll("pre.chroma code span.n").forEach(function (name) {
    var next = name.nextElementSibling;
    if (next && next.classList.contains("p") && next.textContent.trim().charAt(0) === "(") {
      name.classList.add("nf-call");
    }
  });
})();
