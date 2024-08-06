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

        return `
          <article class="novel-item">
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
              </div>
          </article>
      `;
      })
      .join("");
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

document.getElementById("search-title").addEventListener("input", filterNovels);
document
  .getElementById("search-genre")
  .addEventListener("change", filterNovels);
