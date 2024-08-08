// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHPVw1i7gFhJ9xmtA-dH7DS4-qiSBpiiQ",
  authDomain: "novel-a324b.firebaseapp.com",
  databaseURL: "https://novel-a324b.firebaseio.com",
  projectId: "novel-a324b",
  storageBucket: "novel-a324b.appspot.com",
  messagingSenderId: "426550920737",
  appId: "1:426550920737:web:5e412b9f3b6e732f3b0560",
  measurementId: "G-ETT74G5XQR",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference to comments in database
const commentsRef = firebase.database().ref("comments");

// Submit comment function
function submitComment() {
  const name = document.getElementById("comment-name").value;
  const comment = document.getElementById("comment-input").value;

  if (comment !== "") {
    const newCommentRef = commentsRef.push();
    newCommentRef.set({
      name: name,
      comment: comment,
      timestamp: new Date().toISOString(),
    });

    document.getElementById("comment-input").value = "";
  }
}

// Load comments function
commentsRef.on("child_added", (data) => {
  const commentData = data.val();
  const commentElement = document.createElement("div");
  commentElement.className = "comment";
  commentElement.innerHTML = `
      <p><strong>${commentData.name}</strong></p>
      <p>${commentData.comment}</p>
      <p class="comment-timestamp">${new Date(
        commentData.timestamp
      ).toLocaleString()}</p>
  `;
  document.getElementById("comments-list").appendChild(commentElement);
});

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
