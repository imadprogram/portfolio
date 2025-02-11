// JavaScript for animated text
const wordElement = document.querySelector(".animated-text .word");
const words = JSON.parse(wordElement.getAttribute("data-words"));
let currentIndex = 0;

function updateWord() {
  wordElement.textContent = words[currentIndex];
  currentIndex = (currentIndex + 1) % words.length;
}

setInterval(updateWord, 2000); // Change word every 2 seconds

// Add a scroll event listener
window.addEventListener("scroll", function () {
  let navbar = document.querySelector('.navbar');
  if (window.scrollY >  1) { // Adjust the scroll value as needed
      navbar.classList.add("scroll"); // Add class when scrolling down
  }
});
