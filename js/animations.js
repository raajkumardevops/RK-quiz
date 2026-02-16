// =============================
// NANO REVEAL (SINGLE ELEMENT)
// =============================
function nanoReveal(id, delay = 0) {
  const el = document.getElementById(id);
  if (!el) return;

  el.classList.add("nano-hidden");

  setTimeout(() => {
    el.classList.remove("nano-hidden");
    el.classList.add("nano-in");
  }, delay);
}

// =============================
// STAGGER CHILDREN
// =============================
function nanoStagger(id, delay = 200) {
  const el = document.getElementById(id);
  if (!el) return;

  el.classList.add("nano-stagger");

  setTimeout(() => {
    el.classList.add("show");
  }, delay);
}

// =============================
// PAGE EXIT
// =============================
function nanoExit(nextPage) {
  document.body.classList.add("nano-out");
  setTimeout(() => {
    window.location.href = nextPage;
  }, 500);
}
