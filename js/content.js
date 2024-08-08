// Scroll to Section
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  } else {
    console.error(`Section with ID ${sectionId} not found.`);
  }
}

// Load comments when the page loads
document.addEventListener('DOMContentLoaded', () => {
  loadComments();

  // Mengatur date table
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
