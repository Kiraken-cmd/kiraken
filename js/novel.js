document.addEventListener("DOMContentLoaded", () => {
  console.log("Web Baca Novel siap digunakan");
  populateNovelList();
});

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  } else {
    console.error(`Section with ID ${sectionId} not found.`);
  }
}

function populateNovelList() {
  const novelItems = document.getElementById("novel-items");
  const latestNovels = document.querySelectorAll("#latest .novel-item");

  if (novelItems) {
    novelItems.innerHTML = Array.from(latestNovels)
      .map((novel) => {
        const img = novel.querySelector("img");
        const titleElement = novel.querySelector("h3");
        const descriptionElement = novel.querySelector("p");
        const genreElement = novel.querySelector(".genre");
        const dataPage = novel.getAttribute("data-page") || "#"; // Ambil data-page

        return `
          <article class="novel-item" data-page="${dataPage}">
              ${
                img
                  ? `<img src="${img.src}" alt="${
                      titleElement ? titleElement.innerText : "No Title"
                    }">`
                  : ""
              }
              <div class="novel-content">
                  <h3>${titleElement ? titleElement.innerText : "No Title"}</h3>
                  <p>${
                    descriptionElement
                      ? descriptionElement.innerText
                      : "No Description"
                  }</p>
                  <p class="genre">${
                    genreElement ? genreElement.innerText : "No Genre"
                  }</p>
                  <button class="read-now">Baca Sekarang</button>
              </div>
          </article>
      `;
      })
      .join("");

    // Tambahkan event listener setelah HTML di-update
    const detailButtons = document.querySelectorAll(".read-now");
    detailButtons.forEach((button) => {
      button.addEventListener("click", (event) => {
        const article = button.closest(".novel-item");
        const page = article.getAttribute("data-page");
        if (page) {
          window.location.href = page;
        } else {
          console.error("Halaman detail tidak ditemukan.");
        }
      });
    });
  } else {
    console.error("Element with ID 'novel-items' not found.");
  }
}

function filterNovels() {
  const searchTitle = document
    .getElementById("search-title")
    .value.toLowerCase();
  const searchGenre = document
    .getElementById("search-genre")
    .value.toLowerCase();

  const novelItems = document.querySelectorAll("#novel-items .novel-item");

  // Pisahkan genre yang dicari menjadi array
  const genreArray = searchGenre.split(",").map((genre) => genre.trim());

  novelItems.forEach((item) => {
    const titleElement = item.querySelector("h3");
    const title = titleElement ? titleElement.innerText.toLowerCase() : "";
    const genreElement = item.querySelector(".genre");
    const genre = genreElement
      ? genreElement.innerText.toLowerCase().replace("genre: ", "")
      : "";

    const matchesTitle = title.includes(searchTitle);

    // Cek apakah genre novel termasuk dalam genreArray
    const matchesGenre =
      genreArray.length === 0 || genreArray.some((g) => genre.includes(g));

    item.style.display = matchesTitle && matchesGenre ? "flex" : "none";
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const scrollUpButton = document.getElementById("scroll-up");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollUpButton.style.display = "flex";
    } else {
      scrollUpButton.style.display = "none";
    }
  });

  scrollUpButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  console.log("Web Baca Novel siap digunakan");
  populateNovelList();

  const scrollUpButton = document.getElementById("scroll-up");
  const toggleNavbarButton = document.getElementById("toggle-navbar");
  const navbar = document.getElementById("navbar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollUpButton.style.display = "flex";
    } else {
      scrollUpButton.style.display = "none";
    }
  });

  scrollUpButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  toggleNavbarButton.addEventListener("click", () => {
    navbar.classList.toggle("show");
  });

  document
    .getElementById("search-title")
    .addEventListener("input", filterNovels);
  document
    .getElementById("search-genre")
    .addEventListener("change", filterNovels);

  // Tambahkan event listener untuk tombol Detail Novel
  const detailButtons = document.querySelectorAll(".read-now");
  detailButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const page = button.getAttribute("data-page");
      if (page) {
        window.location.href = page;
      } else {
        console.error("Halaman detail tidak ditemukan.");
      }
    });
  });

  // Tambahkan event listener untuk link navigasi
  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault(); // Mencegah navigasi default

      const targetId = link.getAttribute("href").substring(1); // Ambil ID target tanpa #
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
        history.pushState(null, "", `#${targetId}`); // Ubah URL di address bar
      } else {
        console.error(`Section dengan ID ${targetId} tidak ditemukan.`);
      }
    });
  });

  // Menangani navigasi back/forward browser
  window.addEventListener("popstate", () => {
    const hash = window.location.hash.substring(1); // Ambil ID dari URL
    const targetSection = document.getElementById(hash);

    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  // Tambahkan event listener untuk link navigasi
  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault(); // Mencegah navigasi default

      const targetId = link.getAttribute("href").substring(1); // Ambil ID target tanpa #
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
        history.pushState(null, "", `#${targetId}`); // Ubah URL di address bar
      } else {
        console.error(`Section dengan ID ${targetId} tidak ditemukan.`);
      }
    });
  });

  // Menangani navigasi back/forward browser
  window.addEventListener("popstate", () => {
    const hash = window.location.hash.substring(1); // Ambil ID dari URL
    const targetSection = document.getElementById(hash);

    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  });
});

document.getElementById("search-title").addEventListener("input", filterNovels);
document
  .getElementById("search-genre")
  .addEventListener("change", filterNovels);
