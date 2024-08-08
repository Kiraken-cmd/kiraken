// Firebase configuration
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
const database = firebase.database();
const commentsRef = database.ref('comments');

// Function to submit a comment
function submitComment() {
  const name = document.getElementById('comment-name').value;
  const comment = document.getElementById('comment-input').value;

  if (comment.trim()) {
    const newCommentRef = commentsRef.push();
    newCommentRef.set({
      name: name,
      comment: comment,
      timestamp: new Date().toISOString()
    }).then(() => {
      document.getElementById('comment-input').value = ''; // Clear the input
    }).catch((error) => {
      console.error('Error adding comment:', error);
    });
  } else {
    alert('Komentar tidak boleh kosong.');
  }
}

// Function to load comments
function loadComments() {
  commentsRef.orderByChild('timestamp').on('child_added', (snapshot) => {
    const commentData = snapshot.val();
    const commentElement = document.createElement('div');
    commentElement.classList.add('comment-item');
    commentElement.innerHTML = `
      <p><strong>${commentData.name}:</strong> ${commentData.comment}</p>
    `;
    document.getElementById('comments-list').appendChild(commentElement);
  });
}

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

  // Event listener for submitting comment
  document.getElementById("submit-comment").addEventListener("click", submitComment);
});
