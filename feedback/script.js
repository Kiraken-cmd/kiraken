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
