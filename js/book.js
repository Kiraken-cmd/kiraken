// Mendapatkan elemen tombol dan chapter
const prevButton = document.getElementById("prev-chapter");
const nextButton = document.getElementById("next-chapter");

// Mendapatkan semua elemen chapter dan menyimpannya dalam array
const chapters = Array.from(document.querySelectorAll(".chapter"));

// Menentukan indeks chapter saat ini
let currentChapterIndex = 0;

// Menampilkan chapter berdasarkan indeks
function showChapter(index) {
  chapters.forEach((chapter, i) => {
    chapter.style.display = i === index ? "block" : "none";
  });

  // Perbarui URL dengan ID chapter saat ini
  const chapterId = chapters[index].id;
  window.history.replaceState(null, null, `#${chapterId}`);

  // Atur visibilitas tombol Previous dan Next
  prevButton.style.display = index > 0 ? "block" : "none";
  nextButton.style.display = index < chapters.length - 1 ? "block" : "none";
}

// Menangani klik tombol Previous
prevButton.addEventListener("click", () => {
  if (currentChapterIndex > 0) {
    currentChapterIndex--;
    showChapter(currentChapterIndex);
    window.scrollTo(0, 0); // Menggulir ke atas saat berpindah chapter
  }
});

// Menangani klik tombol Next
nextButton.addEventListener("click", () => {
  if (currentChapterIndex < chapters.length - 1) {
    currentChapterIndex++;
    showChapter(currentChapterIndex);
    window.scrollTo(0, 0); // Menggulir ke atas saat berpindah chapter
  }
});

// Fungsi pencarian
const searchInput = document.getElementById("search-bar");
const searchButton = document.getElementById("search-button");

searchButton.addEventListener("click", () => {
  const query = searchInput.value.toLowerCase();
  const matchedChapters = Array.from(chapters).filter((chapter) => {
    const title = chapter.querySelector("h3")
      ? chapter.querySelector("h3").textContent.toLowerCase()
      : "";
    return title.includes(query);
  });

  if (matchedChapters.length > 0) {
    currentChapterIndex = Array.from(chapters).indexOf(matchedChapters[0]);
    showChapter(currentChapterIndex);
  } else {
    alert("Chapter yang anda cari tidak ditemukan!!!");
  }
});

// Menangani pencarian saat mengetik
searchInput.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    searchButton.click();
  }
});

// Saat halaman dimuat
document.addEventListener("DOMContentLoaded", () => {
  const hash = window.location.hash;

  // Cari chapter dengan ID yang sesuai
  const index = chapters.findIndex((chapter) => `#${chapter.id}` === hash);

  if (index !== -1) {
    // Jika hash ditemukan, tampilkan chapter yang sesuai
    currentChapterIndex = index;
    showChapter(currentChapterIndex);
  } else {
    // Jika tidak ada hash, tampilkan chapter pertama
    showChapter(0);
  }
});

// Jika halaman di-reload tanpa hash, tampilkan chapter pertama
document.addEventListener("DOMContentLoaded", () => {
  showChapter(0);
});

// Url Function
// Mendapatkan path dari URL saat ini
let currentPath = window.location.pathname;

// Mengecek apakah path diakhiri dengan ".html"
if (currentPath.endsWith(".html")) {
  // Menghapus ".html" dari akhir path
  let newPath = currentPath.slice(0, -5);

  // Mengubah URL tanpa memuat ulang halaman
  window.history.replaceState(null, "", newPath);
}
