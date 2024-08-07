// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};
// klik diluar sidebar utk menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// Memfungsikan menu contact me agar terkirim ke email
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const submitButton = form.querySelector(".btn");
  const inputs = form.querySelectorAll("input[required], textarea[required]");

  // Function untuk check validitas form
  function checkFormValidity() {
    let isValid = true;
    inputs.forEach((input) => {
      if (!input.value.trim()) {
        isValid = false;
      }
    });
    submitButton.disabled = !isValid;
  }

  // Tambahkan event listener ke input
  inputs.forEach((input) => {
    input.addEventListener("input", checkFormValidity);
  });

  // Pemeriksaan awal pada pemuatan halaman
  checkFormValidity();

  // Menangani pengiriman form
  form.addEventListener("submit", function (event) {
    if (!submitButton.disabled) {
      // Izinkan pengiriman form
      form.submit();
      alert(
        "Your message has been successfully sent!, Thank you for your feedback 😊"
      );
      // Tunda pemuatan ulang untuk memastikan permintaan pengiriman form terkirim
      setTimeout(() => {
        location.reload();
      }, 1000);
    } else {
      // Cegah pengiriman formulir jika form tidak valid
      event.preventDefault();
    }
  });
});
