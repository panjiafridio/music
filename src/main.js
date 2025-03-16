document.addEventListener("DOMContentLoaded", function () {
  // Daftar URL tujuan ketika gambar diklik
  const artistLinks = [
      "https://www.fiverr.com/inbox/amazonwoman2020",
      "https://www.fiverr.com/inbox/amazonwoman2020",
      "https://www.fiverr.com/inbox/amazonwoman2020",
      "https://www.fiverr.com/inbox/amazonwoman2020",
      "https://www.fiverr.com/inbox/amazonwoman2020",
      "https://www.fiverr.com/inbox/amazonwoman2020"
  ];

  // Ambil semua gambar dengan class "artist-thumbnail"
  const artistImages = document.querySelectorAll(".artist-thumbnail");

  // Tambahkan event listener ke masing-masing gambar
  artistImages.forEach((img, index) => {
      img.classList.add("cursor-pointer", "hover:scale-110", "transition-transform", "duration-300");
      img.addEventListener("click", () => {
          window.open(artistLinks[index], "_blank"); // Buka link di tab baru
      });
  });
});

// Animation pintu
setTimeout(() => {
    // Pintu terbuka
    document.getElementById("leftDoor").style.transform = "rotateY(-120deg)";
    document.getElementById("rightDoor").style.transform = "rotateY(120deg)";
    
    setTimeout(() => {
        // Pintu zoom-out dan halaman utama langsung muncul bersamaan
        document.getElementById("doorContainer").classList.add("zoom-out-door");
        document.getElementById("content").classList.add("content-show");

        setTimeout(() => {
            document.getElementById("doorContainer").style.display = "none";
        }, 1500);
    }, 2000);
}, 2000);