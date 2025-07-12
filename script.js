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


const playArrow = document.getElementById('playArrow');
const pauseBtn = document.getElementById('pauseBtn');

playArrow.addEventListener('click', () => {
  playArrow.style.display = 'none';
  pauseBtn.style.display = 'inline-block';
});

pauseBtn.addEventListener('click', () => {
  pauseBtn.style.display = 'none';
  playArrow.style.display = 'inline-block';
});
