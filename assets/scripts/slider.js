// importing my js module
import { sliderAssets } from "./jsonStore.js";

// dynamically create slider images
const desktopHeroContainer = document.querySelector(".hero-container");
const slideshowContainer = document.querySelector(".slideshow-container");
const dotContainer = document.querySelector(".dot-container");
const heroSilder = document.querySelector(".slider");
const videoPlayer =document.querySelector(".video-overlay");
sliderAssets.forEach((asset, index) => {
  // Create a new slide element
  const slide = document.createElement("div");
  slide.classList.add("mySlides", "fade");

  // Create the number text element
  const numbertext = document.createElement("div");
  numbertext.classList.add("numbertext");
  numbertext.textContent = `${index + 1} / ${sliderAssets.length}`;

  // Create the image element
  const img = document.createElement("img");
  img.src = asset.image;
  img.style.width = "100%";

  // Create the text element
  const text = document.createElement("div");
  text.classList.add("text");
  text.textContent = asset.caption;

  // Create a div for the background gradient
  const gradientLayer = document.createElement("div");
  gradientLayer.classList.add("gradient-layer");

  // Append elements to the slide
  slide.appendChild(numbertext);
  slide.appendChild(img);
  slide.appendChild(gradientLayer);
  slide.appendChild(text);

  // Append the slide to the slideshow container
  slideshowContainer.appendChild(slide);
});

// dynamically generate the dots according to the number of images
for (let i = 0; i < sliderAssets.length; i++) {
  const dot = document.createElement("span");
  dot.classList.add("dot");
  dotContainer.appendChild(dot);
}

// slider animation
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active-ball", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active-ball";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}
let isHovered = false;

// handle video apper on hover
desktopHeroContainer.addEventListener('mouseenter', () => {
  if (!isHovered) {
    // Show the video and hide the slider when hovering
    console.log('hovered');
    videoPlayer.classList.add('show');
    heroSilder.classList.add('hide');
    isHovered = true;
  }
});

desktopHeroContainer.addEventListener('mouseleave', () => {
  if (isHovered) {
    console.log('not hovered');
    // Hide the video and show the slider when the mouse leaves
    videoPlayer.classList.remove('show');
    heroSilder.classList.remove('hide');
    isHovered = false;
  }
});
