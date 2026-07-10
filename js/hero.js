const bottle = document.querySelector(".hero-image img");

document.addEventListener("mousemove", (e) => {
  const x = (window.innerWidth / 2 - e.clientX) / 40;

  const y = (window.innerHeight / 2 - e.clientY) / 40;

  bottle.style.transform = `rotateY(${x}deg)

rotateX(${-y}deg)`;
});
