// daftar khodam yang tersedia
const khodamList = [
  "Macan Putih",
  "Macan Kumbang",
  "Naga",
  "Jin Qorin",
  "Tutup Botol",
  "Ular",
  "Buaya Putih",
  "Sarung Bantal",
  "Sarung Wadimor",
  "Gayung",
  "Botol Bekas",
  "Kuntilanak",
  "Genderuwo",
  "Seledri",
  "Iblis",
  "Roxy",
  "Dalgona",
  "Kayu Manis",
  "Freeload",
  "Tidak Ada"
];

// fungsi untuk memilih khodam secara acak
function pilihKhodam(event) {
  event.preventDefault();
  const nama = document.getElementById("nama").value;
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = ""; // Menggunakan innerHTML agar bisa menambahkan elemen HTML
  if (nama) {
    const randomIndex = Math.floor(Math.random() * khodamList.length);
    const khodamTerpilih = khodamList[randomIndex];
    resultDiv.innerHTML = `Nama anda adalah <strong>${nama.toUpperCase()}</strong> dan khodam pilihan anda adalah <strong>${khodamTerpilih.toUpperCase()}</strong>.`;

    // menghapus hasil setelah 5 detik
    setTimeout(() => {
      resultDiv.textContent = "";
    }, 5000);
  } else {
    resultDiv.textContent = "Nama tidak boleh kosong.";
  }
}

// menambah event listener pada form
document.getElementById("khodamForm").addEventListener("submit", pilihKhodam);
