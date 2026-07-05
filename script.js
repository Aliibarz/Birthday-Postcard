let current = 0;
let slides = [];
let music = document.getElementById("bgMusic");

document.addEventListener("DOMContentLoaded", function () {
  slides = document.querySelectorAll(".slide");

  const beginBtn = document.getElementById("beginBtn");

  beginBtn.addEventListener("click", function () {
    document.getElementById("startScreen").style.display = "none";
    document.getElementById("slider").classList.remove("hidden");
    document.getElementById("controls").classList.remove("hidden");

    showSlide(0);

    music.volume = 0.5;
    music.play();
  });

  document.getElementById("next").addEventListener("click", nextSlide);
  document.getElementById("prev").addEventListener("click", prevSlide);
});

function showSlide(index) {
  slides.forEach(s => s.classList.remove("active"));
  slides[index].classList.add("active");
}

function nextSlide() {
  if (current < slides.length - 1) {
    current++;
    showSlide(current);
  }
}

function prevSlide() {
  if (current > 0) {
    current--;
    showSlide(current);
  }
}

// FINAL SLIDE MUSIC
function playSong(src) {
  music.pause();
  music.src = src;
  music.play();
}
