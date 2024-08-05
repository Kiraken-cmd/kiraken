document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-link");
  const contentSections = document.querySelectorAll(".content-section");
  const categoryLinks = document.querySelectorAll(".category");
  const novels = document.querySelectorAll(".novel");
  const searchInput = document.getElementById("search");
  const homeNovelsContainer = document.getElementById("home-novels");
  const novelsContainer = document.querySelector(".novels");

  // Clone novels to home section
  novels.forEach((novel) => {
    const clone = novel.cloneNode(true);
    homeNovelsContainer.appendChild(clone);
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const contentId = event.target.getAttribute("data-content");

      contentSections.forEach((section) => {
        section.style.display = "none";
      });

      const contentToShow = document.getElementById(contentId);
      if (contentToShow) {
        contentToShow.style.display = "block";
      }
    });
  });

  categoryLinks.forEach((category) => {
    category.addEventListener("click", (event) => {
      event.preventDefault();
      const categoryId = event.target.getAttribute("data-category");

      novels.forEach((novel) => {
        const categories = novel.getAttribute("data-categories").split(", ");
        if (categories.includes(categoryId) || categoryId === "all") {
          novel.style.display = "block";
        } else {
          novel.style.display = "none";
        }
      });
    });
  });

  searchInput.addEventListener("input", () => {
    const searchQuery = searchInput.value.toLowerCase();

    novels.forEach((novel) => {
      const novelText = novel.querySelector("p").textContent.toLowerCase();
      const genreText = novel.querySelector(".genre").textContent.toLowerCase();
      if (novelText.includes(searchQuery) || genreText.includes(searchQuery)) {
        novel.style.display = "block";
      } else {
        novel.style.display = "none";
      }
    });
  });
});
