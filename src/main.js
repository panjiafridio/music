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


// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Artists Wall</title>
//     <script src="https://unpkg.com/@tailwindcss/browser@4"></script>
//     <link rel="stylesheet" href="/src/style.css">
//     <style>
//         /* Gaya untuk efek pintu */
//         .door-container {
//             position: fixed;
//             top: 0;
//             left: 0;
//             width: 100vw;
//             height: 100vh;
//             display: flex;
//             align-items: center;
//             justify-content: center;
//             overflow: hidden;
//             z-index: 50;
//             background-color: rgba(0, 0, 0, 0.9);
//         }

//         .door {
//             position: absolute;
//             width: 25%;
//             height: 80%;
//             /* background: url('door-texture.jpg') center/cover no-repeat; */
//             background-color: blueviolet;
//             transition: transform 2s ease-in-out;
//         }

//         .left-door {
//             left: 37%;
//             transform-origin: left center;
//         }

//         .right-door {
//             right: 37%;
//             transform-origin: right center;
//         }

//         /* Efek zoom masuk ke dalam ruangan */
//         .zoom-in-room {
//             animation: zoomInRoom 2s ease-in-out forwards;
//         }

//         @keyframes zoomInRoom {
//             0% {
//                 transform: scale(0.5);
//                 opacity: 0;
//             }
//             100% {
//                 transform: scale(1);
//                 opacity: 1;
//             }
//         }

//     </style>
// </head>
// <body class="flex items-center justify-center w-full">

//     <!-- Pintu awal -->
//     <div id="doorContainer" class="door-container">
//         <div id="leftDoor" class="door left-door"></div>
//         <div id="rightDoor" class="door right-door"></div>
//     </div>

//     <!-- Halaman utama -->
//     <div id="content" class="w-full h-[100vh] relative flex justify-evenly items-center gap-2 bg-gray-800 p-2 overflow-hidden opacity-0">
//         <!-- Seniman di kiri -->
//         <div class="flex flex-col">
//             <img src="example.jpg" alt="Artist 1" class="artist-thumbnail border-4 border-yellow-500 rounded-lg shadow-xl">
//             <img src="example.jpg" alt="Artist 2" class="artist-thumbnail border-4 border-yellow-500 rounded-lg shadow-xl">
//             <img src="example.jpg" alt="Artist 3" class="artist-thumbnail border-4 border-yellow-500 rounded-lg shadow-xl">
//         </div>

//         <!-- Video di tengah -->
//         <div class="relative">
//             <iframe width="560" height="315" src="https://www.youtube.com/embed/vnODfFJTLGg?si=FNTQapxATpuzGGyh&amp;controls=0&amp;start=233" 
//                 title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
//                 referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
//             </iframe>
//         </div>

//         <!-- Seniman di kanan -->
//         <div class="flex flex-col">
//             <img src="example.jpg" alt="Artist 4" class="artist-thumbnail border-4 border-yellow-500 rounded-lg shadow-xl">
//             <img src="example.jpg" alt="Artist 5" class="artist-thumbnail border-4 border-yellow-500 rounded-lg shadow-xl">
//             <img src="example.jpg" alt="Artist 6" class="artist-thumbnail border-4 border-yellow-500 rounded-lg shadow-xl">
//         </div>
//     </div>

//     <script>
//         setTimeout(() => {
//             // Pintu terbuka
//             document.getElementById("leftDoor").style.transform = "rotateY(-120deg)";
//             document.getElementById("rightDoor").style.transform = "rotateY(120deg)";
            
//             setTimeout(() => {
//                 // Halaman utama muncul dengan efek zoom-in
//                 document.getElementById("content").classList.add("zoom-in-room");

//                 // Setelah zoom selesai, biarkan background pintu tetap ada
//             }, 2000);
//         }, 2000);
//     </script>

// </body>
// </html>

