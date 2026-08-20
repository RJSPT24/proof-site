(function () {
  var SUN  = '<circle cx="12" cy="12" r="4"></circle><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"></path>';
  var MOON = '<path d="M20 14.5A8 8 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5z"></path>';

  function current() {
    var set = document.documentElement.getAttribute("data-theme");
    if (set === "dark" || set === "light") return set;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  function paint() {
    var dark = current() === "dark";
    var icon = document.getElementById("themeIcon");
    var label = document.getElementById("themeLabel");
    var btn = document.getElementById("themeToggle");
    if (!icon || !label || !btn) return;
    icon.innerHTML = dark ? SUN : MOON;
    label.textContent = dark ? "Light" : "Dark";
    btn.setAttribute("aria-label", "Switch to " + (dark ? "light" : "dark") + " theme");
  }
  var btn = document.getElementById("themeToggle");
  if (btn) {
    btn.addEventListener("click", function () {
      document.documentElement.setAttribute("data-theme", current() === "dark" ? "light" : "dark");
      paint();
    });
  }
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", paint);
  paint();
})();
