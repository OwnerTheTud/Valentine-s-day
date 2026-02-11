const field = document.querySelector(".butterfly-field");

function createButterfly() {
  const b = document.createElement("div");
  b.classList.add("butterfly");

  const leftWing = document.createElement("div");
  leftWing.classList.add("wing", "left");

  const rightWing = document.createElement("div");
  rightWing.classList.add("wing", "right");

  b.appendChild(leftWing);
  b.appendChild(rightWing);

  field.appendChild(b);

  moveRandom(b);
}

function moveRandom(el) {
  let x = Math.random() * window.innerWidth;
  let y = Math.random() * window.innerHeight;

  el.style.left = x + "px";
  el.style.top = y + "px";

  setInterval(() => {
    let newX = Math.random() * window.innerWidth;
    let newY = Math.random() * window.innerHeight;

    el.style.transition = "transform 6s ease-in-out";
    el.style.transform = `translate(${newX - x}px, ${newY - y}px)`;

    x = newX;
    y = newY;
  }, 6000);
}

for (let i = 0; i < 30; i++) {
  createButterfly();
}