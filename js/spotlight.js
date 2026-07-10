const hero = document.querySelector(".hero");

const light = document.querySelector(".mouse-light");

hero.addEventListener("mousemove", (e) => {
  const rect = hero.getBoundingClientRect();

  const x = e.clientX - rect.left;

  const y = e.clientY - rect.top;

  light.style.left = x + "px";

  light.style.top = y + "px";
});
