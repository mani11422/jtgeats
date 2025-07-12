// Carousel functionality
const carouselTrack = document.getElementById("carouselTrack");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

prevBtn.addEventListener("click", () => {
  carouselTrack.scrollBy({ left: -300, behavior: "smooth" });
});

nextBtn.addEventListener("click", () => {
  carouselTrack.scrollBy({ left: 300, behavior: "smooth" });
});

// Auto-scroll carousel every 5 seconds
let carouselInterval = setInterval(() => {
  carouselTrack.scrollBy({ left: 300, behavior: "smooth" });
  
  // Reset to first item if at end
  if (carouselTrack.scrollLeft + carouselTrack.clientWidth >= carouselTrack.scrollWidth - 50) {
    setTimeout(() => {
      carouselTrack.scrollTo({ left: 0, behavior: "smooth" });
    }, 1000);
  }
}, 5000);

// Pause auto-scroll on hover
carouselTrack.addEventListener("mouseenter", () => {
  clearInterval(carouselInterval);
});

carouselTrack.addEventListener("mouseleave", () => {
  carouselInterval = setInterval(() => {
    carouselTrack.scrollBy({ left: 300, behavior: "smooth" });
    
    // Reset to first item if at end
    if (carouselTrack.scrollLeft + carouselTrack.clientWidth >= carouselTrack.scrollWidth - 50) {
      setTimeout(() => {
        carouselTrack.scrollTo({ left: 0, behavior: "smooth" });
      }, 1000);
    }
  }, 5000);
});

// Request Dish Modal functionality
const requestModal = document.getElementById("requestModal");
const requestBtn = document.querySelector(".request-btn");
const closeModalBtn = document.getElementById("closeModal");
const cancelRequestBtn = document.getElementById("cancelRequest");
const submitRequestBtn = document.getElementById("submitRequest");

function openModal() {
  requestModal.style.display = "block";
  document.body.style.overflow = "hidden";
}

function closeModal() {
  requestModal.style.display = "none";
  document.body.style.overflow = "auto";
}

requestBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);
cancelRequestBtn.addEventListener("click", closeModal);

submitRequestBtn.addEventListener("click", function() {
  // Here you would typically collect form data and send it
  alert("Your request has been submitted!");
  closeModal();
});

// Close modal when clicking outside the content
requestModal.addEventListener("click", function(e) {
  if (e.target === requestModal) {
    closeModal();
  }
});

// Video Play/Pause functionality
const playBtn = document.getElementById("playBtn");
const pauseBtn = document.getElementById("pauseBtn");

playBtn.addEventListener("click", function() {
  playBtn.style.display = "none";
  pauseBtn.style.display = "flex";
  // Here you would typically play the video
  console.log("Video playing...");
});

pauseBtn.addEventListener("click", function() {
  pauseBtn.style.display = "none";
  playBtn.style.display = "flex";
  // Here you would typically pause the video
  console.log("Video paused...");
});

// Quantity controls for food items
document.querySelectorAll(".qty-btn").forEach(button => {
  button.addEventListener("click", function() {
    const qtyControl = this.parentElement;
    const qtyNum = qtyControl.querySelector(".qty-num");
    let quantity = parseInt(qtyNum.textContent);
    
    if (this.classList.contains("add")) {
      quantity++;
    } else {
      quantity = Math.max(1, quantity - 1);
    }
    
    qtyNum.textContent = quantity;
  });
});

// Add to cart functionality for food items
document.querySelectorAll(".add-btn").forEach(button => {
  button.addEventListener("click", function() {
    const foodCard = this.closest(".carousel-card");
    const foodName = foodCard.querySelector("h3").textContent;
    const foodPrice = foodCard.querySelector(".price").textContent;
    
    // Here you would typically add to cart
    alert(`Added ${foodName} (${foodPrice}) to your cart!`);
    
    // Visual feedback
    this.textContent = "✓ Added";
    this.style.backgroundColor = "#4CAF50";
    setTimeout(() => {
      this.textContent = "+";
      this.style.backgroundColor = "";
    }, 2000);
  });
});