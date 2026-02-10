let envelope = document.getElementById("envelope");
let opened = false;

envelope.addEventListener("click", () => {
  if (!opened) {
    envelope.classList.add("open");
    opened = true;
  } else {
    window.location.href = "letter.html";
  }
});



document.querySelectorAll('.butterfly').forEach(b => {
  const x = Math.random() * 100;
  const y = Math.random() * 100;
  b.style.left = x + '%';
  b.style.top = y + '%';
});
