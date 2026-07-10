const buyModal = document.getElementById("buyModal");

const successModal = document.getElementById("successModal");

document.getElementById("openModal").addEventListener("click", function (e) {
  e.preventDefault();

  buyModal.classList.add("active");
});

document.querySelector(".close-modal").addEventListener("click", function () {
  buyModal.classList.remove("active");
});

document.querySelector(".modal-overlay").addEventListener("click", function () {
  buyModal.classList.remove("active");
});

document.querySelector(".confirm-btn").addEventListener("click", function () {
  buyModal.classList.remove("active");

  successModal.classList.add("active");
});

document.getElementById("closeSuccess").addEventListener("click", function () {
  successModal.classList.remove("active");
});
