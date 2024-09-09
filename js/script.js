// Toggle navbar visibility
const toggleNavbarButton = document.getElementById("toggle-navbar");
const navbar = document.getElementById("navbar");
toggleNavbarButton.addEventListener("click", () => {
  navbar.classList.toggle("show");
});

// Button scroll
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

// Fungsi untuk mencari novel berdasarkan judul dan genre
function filterNovels() {
  // Ambil nilai dari input judul dan genre
  const searchTitle = document
    .getElementById("search-title")
    .value.toLowerCase();
  const searchGenre = document.getElementById("search-genre").value;

  // Ambil semua elemen novel-item
  const novels = document.querySelectorAll(".novel-item");

  // Loop melalui semua novel-item
  novels.forEach((novel) => {
    // Ambil judul novel dan genre dari elemen saat ini
    const title = novel.querySelector("h3").textContent.toLowerCase();
    const genres = novel.querySelector(".genre").textContent.toLowerCase();

    // Cek apakah novel cocok dengan pencarian judul dan genre
    const matchesTitle = title.includes(searchTitle);
    const matchesGenre =
      genres.includes(searchGenre.toLowerCase()) || searchGenre === "";

    // Tampilkan atau sembunyikan novel berdasarkan hasil pencarian
    if (matchesTitle && matchesGenre) {
      novel.style.display = "flex"; // Mengembalikan ke display aslinya
    } else {
      novel.style.display = "none"; // Menyembunyikan jika tidak cocok
    }
  });
}

// Event listener untuk pencarian live berdasarkan input judul
document.getElementById("search-title").addEventListener("input", filterNovels);

// Event listener untuk pencarian live berdasarkan dropdown genre
document
  .getElementById("search-genre")
  .addEventListener("change", filterNovels);

// Fungsi untuk menampilkan atau menyembunyikan tombol scroll-up
window.addEventListener("scroll", function () {
  const scrollUpButton = document.getElementById("scroll-up");
  if (window.scrollY > 300) {
    // Muncul setelah scroll lebih dari 300px
    scrollUpButton.style.display = "flex";
  } else {
    scrollUpButton.style.display = "none";
  }
});

// Cek posisi scroll saat halaman pertama kali dimuat
window.addEventListener("DOMContentLoaded", function () {
  const scrollUpButton = document.getElementById("scroll-up");
  if (window.scrollY > 300) {
    // Jika halaman sudah di-scroll sebelum di-reload
    scrollUpButton.style.display = "flex";
  } else {
    scrollUpButton.style.display = "none";
  }
});

// Fungsi untuk kembali ke atas halaman saat tombol diklik
document.getElementById("scroll-up").addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Gulir halus ke bagian atas
  });
});

// Dapatkan semua elemen <a> di dalam navbar
const navbarLinks = document.querySelectorAll("nav a");

// Tambahkan event listener ke masing-masing elemen
navbarLinks.forEach((link) => {
  link.addEventListener("click", function (event) {
    // Ambil nilai dari atribut data-id
    const sectionId = this.getAttribute("data-id");
    const section = document.getElementById(sectionId);

    // Scroll ke elemen yang sesuai
    section.scrollIntoView({
      behavior: "smooth", // Scroll dengan efek halus
      block: "start", // Mulai scroll dari bagian atas elemen
    });
  });
});

// Url Config
// Mendapatkan path dari URL saat ini
let currentPath = window.location.pathname;

// Mengecek apakah path diakhiri dengan ".html"
if (currentPath.endsWith("index.html")) {
  // Menghapus ".html" dari akhir path
  let newPath = currentPath.slice(0, -5);

  // Mengubah URL tanpa memuat ulang halaman
  window.history.replaceState(null, "", newPath);
}
