// Scroll to Section
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  } else {
    console.error(`Section with ID ${sectionId} not found.`);
  }
}

// Mengatur date table
document.addEventListener("DOMContentLoaded", () => {
  const rows = document.querySelectorAll(".volume-container tbody tr");

  rows.forEach((row) => {
    const dateCell = row.querySelector("td:nth-child(3)");
    const date = row.dataset.date;

    if (date) {
      const today = new Date();
      const chapterDate = new Date(date);
      const timeDiff = today - chapterDate;
      const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));

      if (daysDiff > 0) {
        dateCell.textContent = `${daysDiff} days ago`;
      } else {
        dateCell.textContent = "Today";
      }
    }
  });

  const pageKey = document.body.getAttribute("data-page") || "defaultPageKey";
  loadComments(pageKey);

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

function submitComment() {
  const nameInput = document.getElementById("comment-name");
  const commentInput = document.getElementById("comment-input");
  const name = nameInput.value.trim();
  const commentText = commentInput.value.trim();
  const pageKey = document.body.getAttribute("data-page") || "defaultPageKey";

  if (name && commentText) {
    const comments = JSON.parse(localStorage.getItem(pageKey)) || [];
    const date = new Date().toLocaleDateString();

    comments.push({ name, commentText, date });
    localStorage.setItem(pageKey, JSON.stringify(comments));

    const commentsList = document.getElementById("comments-list");
    const comment = document.createElement("div");
    comment.classList.add("comment");
    comment.innerHTML = `<p class="author">${name}</p><p class="date">${date}</p><p>${commentText}</p>`;
    commentsList.appendChild(comment);

    nameInput.value = "";
    commentInput.value = "";
  } else {
    alert("Harap masukkan nama dan komentar");
  }
}

function loadComments(pageKey) {
  const comments = JSON.parse(localStorage.getItem(pageKey)) || [];
  const commentsList = document.getElementById("comments-list");

  commentsList.innerHTML = "";
  comments.forEach(({ name, commentText, date }) => {
    const comment = document.createElement("div");
    comment.classList.add("comment");
    comment.innerHTML = `<p class="author">${name}</p><p class="date">${date}</p><p>${commentText}</p>`;
    commentsList.appendChild(comment);
  });
}

// Fungsi Scroll
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
