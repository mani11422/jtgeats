const track = document.getElementById('carouselTrack');
const leftBtn = document.querySelector('.carousel-arrow.left');
const rightBtn = document.querySelector('.carousel-arrow.right');

let currentSlide = 0;
const cardWidth = 300; // includes gap
const maxSlide = track.children.length - 1;

leftBtn.addEventListener('click', () => {
  if (currentSlide > 0) {
    currentSlide--;
    track.style.transform = `translateX(-${cardWidth * currentSlide}px)`;
  }
});

rightBtn.addEventListener('click', () => {
  if (currentSlide < maxSlide) {
    currentSlide++;
    track.style.transform = `translateX(-${cardWidth * currentSlide}px)`;
  }
});

// Optional: auto-slide every 5s
setInterval(() => {
  currentSlide = (currentSlide + 1) % (maxSlide + 1);
  track.style.transform = `translateX(-${cardWidth * currentSlide}px)`;
}, 5000);


const modal = document.getElementById("requestModal");
const openBtn = document.querySelector(".request-btn");
const closeBtn = document.getElementById("closeModal");
const cancelBtn = document.getElementById("cancelRequest");
const submitBtn = document.getElementById("submitRequest");

const openModal = () => {
  modal.classList.add("open");
  document.body.style.overflow = "hidden";
};

const closeModal = () => {
  modal.classList.remove("open");
  document.body.style.overflow = "auto";
};

openBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);
cancelBtn.addEventListener("click", closeModal);
submitBtn.addEventListener("click", closeModal);


const video = document.getElementById('foodVideo');
const playIcon = document.getElementById('playIcon');
const videoContainer = document.querySelector('.video-preview');

videoContainer.addEventListener('click', () => {
  if (video.paused) {
    video.play();
    videoContainer.classList.remove('paused');
  } else {
    video.pause();
    videoContainer.classList.add('paused');
  }
});

video.addEventListener('pause', () => {
  videoContainer.classList.add('paused');
});

video.addEventListener('play', () => {
  videoContainer.classList.remove('paused');
});
