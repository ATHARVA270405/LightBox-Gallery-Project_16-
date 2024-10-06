let currentIndex = 0; // Keep track of the current image index
const thumbnails = document.querySelectorAll('.thumbnail'); // All thumbnail images

// Function to change the main image when a thumbnail is clicked
function changeImage(thumbnail) {
  const mainImage = document.getElementById('mainImage');
  mainImage.src = thumbnail.src; // Update the main image source
  currentIndex = Array.from(thumbnails).indexOf(thumbnail); // Update current index
}

// Function to go to the previous image
function previousImage() {
  currentIndex = (currentIndex - 1 + thumbnails.length) % thumbnails.length; // Circular decrement
  const mainImage = document.getElementById('mainImage');
  mainImage.src = thumbnails[currentIndex].src; // Update the main image source
}

// Function to go to the next image
function nextImage() {
  currentIndex = (currentIndex + 1) % thumbnails.length; // Circular increment
  const mainImage = document.getElementById('mainImage');
  mainImage.src = thumbnails[currentIndex].src; // Update the main image source
}
