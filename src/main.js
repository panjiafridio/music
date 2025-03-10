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
      img.classList.add("w-20", "h-20", "rounded-full", "cursor-pointer", "hover:scale-110", "transition-transform", "duration-300");
      img.addEventListener("click", () => {
          window.open(artistLinks[index], "_blank"); // Buka link di tab baru
      });
  });
});
