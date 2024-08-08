// Function to scroll to a section
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  } else {
    console.error(`Section with ID ${sectionId} not found.`);
  }
}

// Function to update dates in the table
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
    } else {
      dateCell.textContent = "Date not available";
    }
  });
});

// Function to edit a comment (placeholder, as you might use localStorage or another method to manage comments)
function editComment(index) {
  const comments = JSON.parse(localStorage.getItem("comments")) || [];
  const commentText = prompt("Edit comment:", comments[index].text);

  if (commentText !== null) {
    comments[index].text = commentText;
    saveComments(comments);
    loadComments();
  }
}

// Function to delete a comment (placeholder, as you might use localStorage or another method to manage comments)
function deleteComment(index) {
  if (confirm("Are you sure you want to delete this comment?")) {
    const comments = JSON.parse(localStorage.getItem("comments")) || [];
    comments.splice(index, 1);
    saveComments(comments);
    loadComments();
  }
}

// Function to save comments (placeholder, as you might use localStorage or another method to manage comments)
function saveComments(comments) {
  localStorage.setItem("comments", JSON.stringify(comments));
}

// Function to load comments (placeholder, as you might use localStorage or another method to manage comments)
function loadComments() {
  const comments = JSON.parse(localStorage.getItem("comments")) || [];
  const commentsContainer = document.getElementById("comments-list");
  commentsContainer.innerHTML = "";

  comments.forEach((comment, index) => {
    const commentElement = document.createElement("div");
    commentElement.innerHTML = `
      <p>${comment.text}</p>
      <button onclick="editComment(${index})">Edit</button>
      <button onclick="deleteComment(${index})">Delete</button>
    `;
    commentsContainer.appendChild(commentElement);
  });
}

// Function to handle scroll-to-top button visibility
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
