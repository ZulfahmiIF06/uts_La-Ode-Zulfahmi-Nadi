// background jumbotron
const hero = document.getElementById("hero");
const images = [
  "img/img1.jpg",
  "img/Benteng Kesultanan Buton.jpeg",
  "img/dapiki-moto-RAL3lZU3j0E-unsplash.jpg",
  "img/ifan-bima-B04Xpnu5JQ4-unsplash.jpg",
  "img/monas.jpeg",
  "img/candi1.jpeg",
  "img/17 Top Tours in Bali_ A Guide To The Best….jpeg",
  "img/rajaampat.jpeg",
  "img/tugujogja.jpeg",
];
let current = 0;
function changeBackground() {
  hero.style.backgroundImage = `url(${images[current]})`;
  current = (current + 1) % images.length;
}
changeBackground();
setInterval(changeBackground, 8000);

//function
