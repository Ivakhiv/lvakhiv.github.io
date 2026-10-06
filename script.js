// Keep the footer current; all navigation works without JavaScript.
const year = document.getElementById('year');
if (year) year.textContent = String(new Date().getFullYear());
