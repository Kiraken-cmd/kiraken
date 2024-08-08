// Mengatur view count page
// document.addEventListener("DOMContentLoaded", function () {
//   let viewCount = localStorage.getItem("viewCount") || 0;
//   viewCount++;
//   localStorage.setItem("viewCount", viewCount);
//   document.getElementById("view-count").innerText = viewCount;
// });

// Scroll  Section
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
});

// Function to edit a comment
// function editComment(index) {
//   const comments = JSON.parse(localStorage.getItem("comments")) || [];
//   const commentText = prompt("Edit komentar:", comments[index].text);

//   if (commentText !== null) {
//     comments[index].text = commentText;
//     saveComments(comments);
//     loadComments();
//   }
// }

// Function to delete a comment
// function deleteComment(index) {
//   if (confirm("Apakah Anda yakin ingin menghapus komentar ini?")) {
//     const comments = JSON.parse(localStorage.getItem("comments")) || [];
//     comments.splice(index, 1);
//     saveComments(comments);
//     loadComments();
//   }
// }

// Load comments when the page is loaded
window.addEventListener("load", loadComments);

// Fungsi Scroll
document.addEventListener("DOMContentLoaded", () => {
  const scrollUpButton = document.getElementById("scroll-up");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      scrollUpButton.style.display = "flex";
    } else {
      scrollUpButton.style.display = "none";
    }
  });

  scrollUpButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
